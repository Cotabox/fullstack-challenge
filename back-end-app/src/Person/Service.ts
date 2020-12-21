import mongoose = require("mongoose");
import {Person} from './Model';
import {getModelForClass} from '@typegoose/typegoose';
import { Connection } from '../database/Connection';

export class PersonService {

    public async listAll() {
        await Connection.connect();

        const personModel = getModelForClass(Person);
        return await personModel.find().exec();

    }

    public async listById(id: string) {

        await Connection.connect();

        const personModel = getModelForClass(Person);

        return await personModel.findById(id).exec();

    }

    public async save(person: Person){

        await Connection.connect();

        const personModel = getModelForClass(Person);
        const personRecorded = await personModel.create(person);

        return personRecorded;
    }
}
