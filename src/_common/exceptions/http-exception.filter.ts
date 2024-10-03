import { Catch, HttpException } from '@nestjs/common';
import { BaseResponse } from 'src/_base/base.response';
import { ResponseMessages } from '../enums/ResponseMessages.enum';
import { DtoPrefix } from '../enums/ValidationMessages.enum';

@Catch(HttpException)
export class HttpExceptionFilter {
    catch(exception: HttpException, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        //const request = ctx.getRequest();
        const status = exception.getStatus();

        const prefixList: DtoPrefix[] = Object.values(DtoPrefix);
        const ValidationMessages = prefixList.find(prefix => {
            return (exception.message && exception.message.startsWith(prefix));
        });
        if (ValidationMessages) {
            response
                .status(status)
                .json(new BaseResponse(null, exception.message, false));
        } else {
            let responseMessage: string;
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
                    responseMessage = ResponseMessages.BAD_GATEWAY + ' | ' + exception.message;
                    break;
            }
            response
                .status(status)
                .json(new BaseResponse(null, responseMessage, false));
        }
    }
}