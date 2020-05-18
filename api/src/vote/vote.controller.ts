import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteDto } from './vote.dto';

@Controller('vote')
export class VoteController {

  constructor(
    private readonly voteService: VoteService,
  ) { }

  @Get()
  getAll() {
    return this.voteService.getAll();
  }

  @Get('/user/:userId')
  getByUser(@Param('userId') userId: number) {
    return this.voteService.getByUser(userId);
  }

  @Post()
  create(@Body() voteDto: VoteDto) {
    return this.voteService.create(voteDto);
  }

}
