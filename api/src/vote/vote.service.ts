import { Injectable, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VoteDto } from './vote.dto';
import { VoteEntity } from './vote.entity';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/user.entity';
import { MISSING_FIELDS } from 'src/shared/constants';

@Injectable()
export class VoteService {

  constructor(
    @InjectRepository(VoteEntity)
    private readonly voteRepository: Repository<VoteEntity>,
    private readonly userService: UserService,
  ) { }

  async getAll(): Promise<VoteEntity[]> {
    return await this.voteRepository.find() || [];
  }

  async getByUser(userId: number): Promise<VoteEntity[]> {
    const userEntity: UserEntity = await this.userService.getByIdInternal(userId);

    return await this.voteRepository.find({ where: { user: { id: userEntity.id } }}) || [];
  }

  async create(voteDto: VoteDto): Promise<VoteEntity> {
    if (!voteDto.userId || !voteDto.personId || !voteDto.voteType) {
      throw new BadRequestException(MISSING_FIELDS);
    }
    
    const userEntity: UserEntity = await this.userService.getByIdInternal(voteDto.userId);
    const voteEntity: VoteEntity = await this.voteRepository.create({ ...voteDto, user: userEntity });
    await this.voteRepository.save(voteEntity);

    return voteEntity;
  }

}
