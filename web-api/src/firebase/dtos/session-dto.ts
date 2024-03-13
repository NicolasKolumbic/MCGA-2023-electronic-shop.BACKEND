import { IsEmail } from "class-validator";

export class SessionDto {
    requestTokenKey: string;
    requestTokenValue: string;
    headerTokenKey: string;
    headerTokenValue: string;
    @IsEmail()
    email: string;
}