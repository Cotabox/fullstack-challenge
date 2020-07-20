import { Request, Response } from 'express';
import { PersonService } from './Service';
import { Person } from './Model';
import expressValidator = require('express-validator');

export class PersonController {

    public static async listAll(req: Request, res: Response) {
        const service = new PersonService();
        const people = await service.listAll();
        res.send(people);
    }

    public static async listById(req: Request, res: Response) {
        const service = new PersonService();
        const people = await service.listById(req.params.id);
        res.send(people);
    }

    public static async save(req: Request, res: Response) {
        const errors = expressValidator.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json(errors);
        }
        const service = new PersonService();
        const person = new Person(req.body);

        try{
            await service.save(person);
        }catch(error){
            res.status(500).send(error);
        }
        return res.status(201).json(person);
    }

}