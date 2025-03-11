import { Injectable, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userservice:UserService,
        private jwtservice:JwtService,
    ){}

    @Post(`/login`)
    async validateuser(email:string,password:string){
        const user= await this.userservice.findbyemail(email);
        if(user && user.password==password){
            return user;
        }
        return null;
    }

    async login(user:any){
        const payload={email:user.email,sub:user.id};
        return{
            access_token:this.jwtservice.sign(payload)
        }
    }
}