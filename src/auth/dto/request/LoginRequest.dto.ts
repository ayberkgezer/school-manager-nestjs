import { IsNotEmpty, MinLength, MaxLength, IsStrongPassword } from "class-validator";
import { DtoPrefix, getValidationMassage, ValidationType } from "src/_common/enums/ValidationMessages.enum";

export class LoginRequestDto {

    @MaxLength(50, { message: getValidationMassage(DtoPrefix.EMAIL_OR_PHONE, ValidationType.MAX_LENGTH, 50) })
    @MinLength(6, { message: getValidationMassage(DtoPrefix.EMAIL_OR_PHONE, ValidationType.MIN_LENGTH, 6) })
    @IsNotEmpty({ message: getValidationMassage(DtoPrefix.EMAIL_OR_PHONE, ValidationType.IS_NOT_EMPTY) })
    emailOrPhone: string;

    @MaxLength(50, { message: getValidationMassage(DtoPrefix.PASSWORD, ValidationType.MAX_LENGTH, 50) })
    @MinLength(6, { message: getValidationMassage(DtoPrefix.PASSWORD, ValidationType.MIN_LENGTH, 6) })
    @IsStrongPassword({}, { message: getValidationMassage(DtoPrefix.PASSWORD, ValidationType.NOT_STRONG_PASSWORD) })
    @IsNotEmpty({ message: getValidationMassage(DtoPrefix.PASSWORD, ValidationType.IS_NOT_EMPTY) })
    password: string;
    constructor() {

    }
}