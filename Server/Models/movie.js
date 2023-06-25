"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let movieSchema = new mongoose_1.Schema({
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
    posterLink: String,
    criticsRating: Number
});
let Movie = (0, mongoose_1.model)('Movie', movieSchema);
exports.default = Movie;
//# sourceMappingURL=movie.js.map