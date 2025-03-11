import { IsString } from "class-validator";

export class updatedto{

    @IsString()
    username:string;

    @IsString()
    email:string;

    @IsString()
    password:string;
}