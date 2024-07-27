import { Module } from '@nestjs/common';
import { BusinessController } from './controllers/business.controller';
import { BusinessService } from './services/business.service';
import { BusinessDao } from './dao/business.dao';
import { LoggerService } from '../common/logger/logger.service';

@Module({
  controllers: [BusinessController],
  providers: [BusinessService, BusinessDao, LoggerService],
  exports: [BusinessService, BusinessDao],
})
export class BusinessModule {}
