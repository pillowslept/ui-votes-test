import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { VoteController } from './vote.controller';
import { VoteService } from './vote.service';
import { LoggerMiddleware } from '../shared/middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoteEntity } from './vote.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([VoteEntity]), UserModule],
  controllers: [VoteController],
  providers: [VoteService],
})
export class VoteModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(VoteController);
  }
}
