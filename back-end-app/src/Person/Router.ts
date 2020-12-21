import express from 'express';
import { PersonController } from './Controller';
import { PeopleValidationMiddleware } from './ValidationMiddleware';
import { Authenticator } from '../User/Authenticator';

const personRouter = express.Router();

personRouter.get('/', Authenticator.authenticate, PersonController.listAll);
personRouter.get('/:id', Authenticator.authenticate, PersonController.listById);
personRouter.post('/', PeopleValidationMiddleware.getValidation(), Authenticator.authenticate, PersonController.save);

export { personRouter };