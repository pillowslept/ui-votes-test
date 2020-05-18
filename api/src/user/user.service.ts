import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserDto } from './user.dto';
import certainFields from 'src/shared/utils/certainFields';
import {
  AUTH_TOKEN,
  MISSING_FIELDS,
  EMAIl_NOT_AVAILABLE,
  USER_NOT_EXISTS,
  LOGIN_FAILED
} from 'src/shared/constants';

@Injectable()
export class UserService {

  private readonly VALID_COLUMNS = ['id', 'email', 'marriageStatus', 'age'];

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  async getAll(): Promise<UserDto[]> {
    return (await this.userRepository.find() || []).map((userEntity) =>
      certainFields(userEntity, this.VALID_COLUMNS) as UserDto);
  }

  async getByIdInternal(id: number): Promise<UserEntity> {
    return this.validateExistence(await this.userRepository.findOne({ where: { id }}));
  }

  async getById(id: number): Promise<UserDto> {
    const userEntity = this.validateExistence(await this.userRepository.findOne({ where: { id }}));

    return certainFields(userEntity, this.VALID_COLUMNS) as UserDto;
  }

  private async getByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { email }});
  }

  async login(userDto: UserDto): Promise<any> {
    if (!userDto.email || !userDto.password) {
      throw new BadRequestException(MISSING_FIELDS);
    }

    const userEntity: UserEntity = await this.userRepository
      .findOne({ where: { email: userDto.email, password: userDto.password }});

    if (!userEntity) {
      throw new BadRequestException(LOGIN_FAILED);
    }

    return {
      token: AUTH_TOKEN,
      email: userEntity.email,
    };
  }

  async create(userDto: UserDto): Promise<any> {
    if (!userDto.email || !userDto.age || !userDto.marriageStatus || !userDto.password) {
      throw new BadRequestException(MISSING_FIELDS);
    }

    const userFoundEntity = await this.getByEmail(userDto.email);
    if (userFoundEntity) {
      throw new ConflictException(EMAIl_NOT_AVAILABLE);
    }

    const userEntity: UserEntity = await this.userRepository.create(userDto);
    await this.userRepository.save(userEntity);

    return {
      token: AUTH_TOKEN,
      email: userEntity.email,
    };
  }

  async update(id: number, userDto: UserDto): Promise<UserEntity> {
    const userEntity: UserEntity = this.validateExistence(await this.userRepository.findOne({ where: { id }}))

    userEntity.age = userDto.age;
    userEntity.marriageStatus = userDto.marriageStatus;
    await this.userRepository.save(userEntity);

    return userEntity;
  }

  private validateExistence(userEntity: UserEntity): UserEntity {
    if (!userEntity) {
      throw new NotFoundException(USER_NOT_EXISTS);
    }

    return userEntity;
  }

}
