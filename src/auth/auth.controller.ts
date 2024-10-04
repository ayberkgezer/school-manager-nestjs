import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginRequestDto } from './dto/request/LoginRequest.dto';
import { Response } from 'express';
import { LoginResponseDto } from './dto/respond/LoginRespond.dto';
import { ResponseMessages } from 'src/_common/enums/ResponseMessages.enum';

@Controller('auth')
export class AuthController {
    @Post('login')
    login(@Body() body: LoginRequestDto, @Res() res: Response<LoginResponseDto>): void {
        const data = { AccesToken: '', RefreshToken: '', user: { name: 'asd', lastName: 'asdf', pay: 12 } };
        res.json(new LoginResponseDto(data, ResponseMessages.SUCCESS, true));
    }
    @Post('register')
    register() {
        return 'register';
    }
    @Post('logout')
    logout() {
        return 'logout';
    }
    @Post('refresh-token')
    refreshToken() {
        return 'refresh-token';
    }
}
