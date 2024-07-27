import { Test, TestingModule } from '@nestjs/testing';
import { BusinessController } from './business.controller';
import { BusinessService } from '../services/business.service';
import { BusinessDao } from '../dao/business.dao';
import { LoggerService } from '../../common/logger/logger.service';
import { Request } from 'express';

export interface CustomRequest extends Request {
  user?: {
    first_name: string;
    last_name: string;
    email: string;
  };
}

describe('BusinessController', () => {
  let controller: BusinessController;
  let businessService: BusinessService;
  let loggerService: LoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessController],
      providers: [
        BusinessService,
        BusinessDao,
        {
          provide: LoggerService,
          useValue: {
            log: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<BusinessController>(BusinessController);
    businessService = module.get<BusinessService>(BusinessService);
    loggerService = module.get<LoggerService>(LoggerService);
  });

  describe('business controller', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('should return "Hello Business!"', () => {
      const mockRequest = {
        user: {
          first_name: 'John',
          last_name: 'Travolta',
          email: 'john.t@gmail.com',
        },
      } as Partial<Request> as CustomRequest;

      jest
        .spyOn(businessService, 'getHelloBusiness')
        .mockReturnValue('Hello Business!');

      const result = controller.getHello(mockRequest);
      expect(result).toBe('Hello Business!');
      expect(loggerService.log).toHaveBeenCalledWith(
        `User payload: ${JSON.stringify(mockRequest.user)}`,
      );
    });
  });
});
