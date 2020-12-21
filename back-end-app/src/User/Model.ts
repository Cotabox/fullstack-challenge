import { prop } from '@typegoose/typegoose';

export class User{

    constructor(body?: any){
        this.userName = body.userName || '';
        this.password = body.password || '';
        this.email = body.email|| '';
    }

    @prop()
    userName: string;

    @prop()
    password: string;

    @prop()
    email: string;

}