/*
File: app.ts
Student Name: Diksha patel , Namrata Savaliya
StudentId: 200540067, 200548688
Date: June 11, 2023
 */

import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//database modules
import mongoose from 'mongoose';
import db from './db';

mongoose.connect(db.remoteURI);

//DB connection events
mongoose.connection.on('connected', () =>{
    console.log(`connected to MongoDB`);
});

mongoose.connection.on('disconnected', () =>{
    console.log(`Disconnected from MongoDB`);
})

import indexRouter from '../Routes/index';

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));

app.use('/', indexRouter);

export default app;
