/*
File: movie.ts
Student Name: Diksha patel , Namrata Savaliya
StudentId: 200540067, 200548688
Date: June 25, 2023
 */
import { Schema, model } from 'mongoose';

interface IMovie {
    id: string,
    title: string,
    studio: string,
    genre: string[],
    director: string[],
    writers: string[],
    actors: string[],
    year: number,
    runningTime: number,
    briefDescription: string,
    mpaRating: string,
    posterLink: string,
    criticsRating: number
}

let movieSchema = new Schema<IMovie>({
    id: String,
    title: String,
    studio: String,
    genre: [String],
    director: [String],
    writers: [String],
    actors: [String],
    year: Number,
    runningTime: Number,
    briefDescription: String,
    mpaRating: String,
    posterLink : String,
    criticsRating: Number
});

let Movie = model<IMovie>('Movie', movieSchema);

export default Movie;