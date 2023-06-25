/*
File: app.ts
Student Name: Diksha patel , Namrata Savaliya
StudentId: 200540067, 200548688
Date: June 25, 2023
 */

import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';

let strategy = passportLocal.Strategy; // alias
import User from '../Models/user';

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

// setup express session
app.use(session({
    secret: db.secret,
    saveUninitialized: false,
    resave: false
  }));

  // initialize passport
app.use(passport.initialize());
app.use(passport.session());

// implement an Auth Strategy
passport.use(User.createStrategy());

// serialize and deserialize user data
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/api/', indexRouter);

export default app;
