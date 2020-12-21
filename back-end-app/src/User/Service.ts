import crypto from 'crypto';
import {User} from './Model';
import {getModelForClass} from '@typegoose/typegoose';
import { Connection } from "../database/Connection";

export class UserService{

    public async getByUserName(name:string){
        await Connection.connect();

        const personModel = getModelForClass(User);

        return await personModel.findOne({userName: name}).exec();
    }

    public async save(user: User){
        await Connection.connect();
        const userModel = getModelForClass(User);

        const dbUser = (await this.getByUserName(user.userName) as User)

        if (dbUser !== null) {
            throw new Error('userName already exists');
        }

        const userCrypted = this.cryptUserPassword(user);
        const {userName, email} = await userModel.create(userCrypted);
        return {userName, email};
    }

    public async validateUser(user: User){
        const dbUser = (await this.getByUserName(user.userName) as User);

        if (dbUser === null) {
            return false;
        }

        const cryptedUser = this.cryptUserPassword(user);

        if (cryptedUser.password !== dbUser.password){
            return false;
        }
        return true;
    }

    private cryptUserPassword(user: User): User{
        user.password = crypto.createHash('md5').update(user.password).digest('hex');
        return user;
    }

}