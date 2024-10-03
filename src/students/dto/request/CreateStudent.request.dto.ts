import { IsNotEmpty, MaxLength, IsNumber } from "class-validator";
import { DtoPrefix, getValidationMassage, ValidationType } from "src/_common/enums/ValidationMessages.enum";

export class CreateStudentRequestDto {

    @MaxLength(20, { message: getValidationMassage(DtoPrefix.NAME, ValidationType.MAX_LENGTH, 20) })
    @IsNotEmpty({ message: getValidationMassage(DtoPrefix.NAME, ValidationType.IS_NOT_EMPTY) })
    name: string;

    @MaxLength(20, { message: getValidationMassage(DtoPrefix.LAST_NAME, ValidationType.MAX_LENGTH, 20) })
    @IsNotEmpty({ message: getValidationMassage(DtoPrefix.LAST_NAME, ValidationType.IS_NOT_EMPTY) })
    lastName: string;

    @IsNumber({}, { message: getValidationMassage(DtoPrefix.IDENTITY_NUMBER, ValidationType.MUST_BE_NUMBER) })
    @IsNotEmpty({ message: getValidationMassage(DtoPrefix.IDENTITY_NUMBER, ValidationType.IS_NOT_EMPTY) })
    identityNumber: number;
}