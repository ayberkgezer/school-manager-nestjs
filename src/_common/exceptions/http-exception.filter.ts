import { Catch, HttpException } from '@nestjs/common';
import { BaseResponse } from 'src/_base/base.response';
import { ResponseMessages } from '../enums/ResponseMessages.enum';

@Catch(HttpException)
export class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        let responseMessage: ResponseMessages;
        switch (status) {
            case 404:
                responseMessage = ResponseMessages.NOT_FOUND;
                break;
            case 500:
                responseMessage = ResponseMessages.INTERNAL_SERVER_ERROR;
                break;
            case 401:
                responseMessage = ResponseMessages.UNAUTHORIZED;
                break;
            default:
                responseMessage = ResponseMessages.BAD_GATEWAY;
                break;
        }
        response
            .status(status)
            .json(new BaseResponse(null, responseMessage, false));
    }
}