import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export class Authenticator{

    public static authenticate(req: Request, res: Response, next: NextFunction){
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader && authorizationHeader.split(' ')[1];

        if (token == null) return res.sendStatus(401);

        jwt.verify(token, process.env.SECRET as string, (error: any)=>{
            if (error) return res.sendStatus(403);
            next();
        })
    }
}