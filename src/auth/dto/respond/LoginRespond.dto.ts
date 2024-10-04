import { BaseResponse } from "src/_base/base.response";
import { EmployeeResponse } from "src/_common/response/Employee.response";

class LoginResponse {
    AccesToken: string;
    RefreshToken: string;
    user: EmployeeResponse
}

export class LoginResponseDto extends BaseResponse<LoginResponse> {
    data: LoginResponse;
}