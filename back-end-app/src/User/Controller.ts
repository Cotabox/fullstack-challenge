import { Request, Response } from "express";
import expressValidator = require('express-validator');
import jwt from 'jsonwebtoken';
import { UserService } from "./Service";
import {User} from './Model';


export class UserController{

    public static async generateToken(req: Request, res: Response){
        const errors = expressValidator.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json(errors);
        }
        const user = new User(req.body);
        const userService = new UserService();

        const userName = user.userName;
        const userIsValid = await userService.validateUser(user)
        if (userIsValid){
            const token = jwt.sign({userName}, process.env.SECRET, { expiresIn: '1800s' });
            return res.json(token);
        }

        return res.sendStatus(401);
    }

    public static async save(req: Request, res: Response){
        const errors = expressValidator.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json(errors);
        }

        const user = new User(req.body);
        const userService = new UserService();
        try{
            const savedUser = await userService.save(user);
            return res.status(201).json(savedUser);
        }catch(Error){
            if(Error.message === 'userName already exists'){
                res.status(409).send(Error.message);
            }else{
                // tslint:disable-next-line:no-console
                res.status(500).send(Error);
            }

        }


    }
}