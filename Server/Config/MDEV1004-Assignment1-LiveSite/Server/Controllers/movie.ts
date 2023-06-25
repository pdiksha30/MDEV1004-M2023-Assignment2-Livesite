/*
File: movie.ts
Student Name: Diksha patel , Namrata Savaliya
StudentId: 200540067, 200548688
Date: June 11, 2023
 */
import { Request, Response, NextFunction } from 'express';
import Movie from '../Models/movie';

export function DisplayMovieList(req: Request, res: Response, next: NextFunction): void
{
    
    Movie.find({})
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        console.error(err);
    });
    
    /*
    try{
        let query = Movie.find({}).exec()

        query.then(function(data){
            res.json(data);
        })
    }
    catch (err) {
        console.error(err);
    }
    */
}