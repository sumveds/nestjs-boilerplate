import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggerService } from './common/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up the custom logger service
  const logger = app.get(LoggerService);
  app.useLogger(logger);

  // Use global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Use global exception filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Retrieve configuration variables
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port') || 3000;

  // Start the application
  await app.listen(port);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
