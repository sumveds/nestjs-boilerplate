import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { BusinessService } from '../services/business.service';
import { NotFoundException } from '../../common/exceptions/not-found.exception';
import { LoggerService } from '../../common/logger/logger.service';

@Controller()
export class BusinessController {
  constructor(
    private readonly businessService: BusinessService,
    private readonly logger: LoggerService,
  ) {}

  @Get()
  getHello(@Req() req: Request): string {
    const user = req['user'];
    this.logger.log(`User payload: ${JSON.stringify(user)}`);
    return this.businessService.getHelloBusiness();
  }
}
