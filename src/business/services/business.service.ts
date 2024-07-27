import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BusinessDao } from '../dao/business.dao';

@Injectable()
export class BusinessService {
  constructor(private readonly businessDao: BusinessDao) {}
  
  getHelloBusiness(): string {
    return 'Hello Business!';
  }
}
