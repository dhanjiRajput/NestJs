import { IsEmail, isEmail, IsString } from "class-validator";

export class createdto{
    @IsString()
    username:string;

    @IsEmail()
    email:string;

    @IsString()
    password:string;
}