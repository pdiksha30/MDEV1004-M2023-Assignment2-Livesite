/*
File: movie.ts
Student Name: Diksha patel , Namrata Savaliya
StudentId: 200540067, 200548688
Date: June 11, 2023
 */
import { Schema, model } from 'mongoose';

interface IMovie {
    movieID: string,
    title: string,
    studio: string,
    genres: string[],
    directors: string[],
    writers: string[],
    actors: string[],
    year: number,
    length: number,
    shortDescription: string,
    mpaRating: number,
    criticsRating: number
}

let movieSchema = new Schema<IMovie>({
    movieID: String,
    title: String,
    studio: String,
    genres: [String],
    directors: [String],
    writers: [String],
    actors: [String],
    year: Number,
    length: Number,
    shortDescription: String,
    mpaRating: Number,
    criticsRating: Number
});

let Movie = model<IMovie>('Movie', movieSchema);

export default Movie;