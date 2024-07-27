import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BusinessModule } from './business/business.module';
import { LoggerService } from './common/logger/logger.service';
import { JwtMiddleware } from './common/middlewares/jwt.middleware';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: [`env/.env.${process.env.NODE_ENV || 'local'}`],
    }),
    BusinessModule,
  ],
  providers: [LoggerService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('*'); // Apply to all routes or specify specific routes
  }
}
