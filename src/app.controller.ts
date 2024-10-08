import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BaseResponse } from './_base/base.response';
import { ResponseMessages } from './_common/enums/ResponseMessages.enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    const user = { id: 2, name: 'John Doe' };
    return new BaseResponse(user, ResponseMessages.SUCCESS, true);
  }
}
