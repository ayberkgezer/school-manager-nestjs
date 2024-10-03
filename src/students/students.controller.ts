import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateStudentRequestDto } from './dto/request/CreateStudent.request.dto';

@Controller('students')
export class StudentsController {
    @Post('')
    @UsePipes(ValidationPipe)
    create(@Body() body: CreateStudentRequestDto) { }
}
