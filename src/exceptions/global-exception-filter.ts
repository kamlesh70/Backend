import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<any>();

    let status: number, error: any;
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      error = exception.getResponse();
      if (process.env.NODE_ENV !== 'production') {
        error['stack'] = exception.stack;
      }
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      error = { message: 'Internal Server Error', status: false };
    }
    
    const errorBody = error;

    response.status(status).json(errorBody);
  }
}
