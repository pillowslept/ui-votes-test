import { Injectable, NestMiddleware, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { AUTH_TOKEN } from '../constants';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: any) {
    Logger.log(`Request to ${req.path} with method ${req.method}`, 'RequestInterceptor');

    const authorization = req.header('Authorization');

    if (!authorization || authorization !== AUTH_TOKEN) {
      Logger.log('Unauthorized', 'LoggerMiddleware');

      return res.status(HttpStatus.UNAUTHORIZED).send({ data: 'Unauthorized', success: false });
    } else {
      next();
    }
  }
}
