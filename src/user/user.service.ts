import { Injectable } from '@nestjs/common';
import { updatedto } from './updatedto';
import { createdto } from './createdto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './Entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User)
        private usersRepository:Repository<User>,
    ){}


    get():Promise<User[]>{
        return this.usersRepository.find();
    };

    create(create:createdto){
        return this.usersRepository.save(create);
    }

    update(updatedto: updatedto, userId: number) {
        console.log(updatedto);
        return this.usersRepository.update(userId, updatedto);
    }

    delete(userId:number){
        return this.usersRepository.delete(userId);
    }

    getuserbyid(id:number){
        return this.usersRepository.findOne({where:{id}});
    }

    findbyemail(email:string){
        return this.usersRepository.findOne({where:{email}});
    }
}