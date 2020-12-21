import express from 'express';
import bodyParser from 'body-parser';
import {personRouter} from './Person/Router';
import {userRouter} from './User/Router';
import dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/person', personRouter);
app.use('/user', userRouter);

app.listen(1337, ()=>{
    // tslint:disable-next-line:no-console
    console.log(' app running in dev mode on localhost:1337');
})

