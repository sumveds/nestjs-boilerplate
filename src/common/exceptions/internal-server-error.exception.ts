import { HttpException, HttpStatus } from '@nestjs/common';

export class InternalServerErrorException extends HttpException {
  constructor(message?: string) {
    super(message || 'Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
