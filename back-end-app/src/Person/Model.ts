import { prop } from '@typegoose/typegoose';

export class Person{

    constructor(body: any){
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.participation = body.participation;
    }

    @prop()
    public firstName?: string;

    @prop()
    public lastName?: string;

    @prop()
    public participation?: number;
}