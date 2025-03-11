import {  Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { createdto } from "./createdto";
import { updatedto } from "./updatedto";

@Controller(`/user`)
export class UserController{

    constructor(private userService:UserService){}

    @Get()
    getuser(){
        return this.userService.get();    
    }

    @Post()
    store(@Body() create:createdto){
        return this.userService.create(create);    
    }

    @Patch(`/:userId`)
    update(@Body() updatedto: updatedto, @Param(`userId`, ParseIntPipe) userId: number) {
        console.log(updatedto);
        
        return this.userService.update(updatedto, userId);
    }

    @Delete(`/:userId`)
    deleteUser(@Param(`userId`,ParseIntPipe) userId:number){
        return this.userService.delete(userId);
    }

   
    @Get(`/:userId`)
    getuserbyId(@Param(`userId`,ParseIntPipe) userId:number){
        return this.userService.getuserbyid(userId);
    }

    
}