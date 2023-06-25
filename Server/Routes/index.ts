/*
File: index.ts
Student Name: Diksha patel , Namrata Savaliya
StudentId: 200540067, 200548688
Date: June 25, 2023
 */
import express from 'express';
let router = express.Router();

/* GET the movie controller */

import { DisplayMovieList, DisplayMovieByID, DisplayMovieList, DisplayMovieByID, AddMovie, UpdateMovie, DeleteMovie, ProcessRegistration, ProcessLogin, ProcessLogout  } from '../Controllers/movie';


import {} from '../Controllers/movie';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movie-list', function(req, res, next)
{
  DisplayMovieList(req, res, next);
});

router.get('/find/:id', function(req, res, next)
{
  DisplayMovieByID(req, res, next);
});

router.post('/add', function(req, res, next)
{
  AddMovie(req, res, next);
});

router.put('/update/:id', function(req, res, next)
{
  UpdateMovie(req, res, next);
});

router.delete('/delete/:id', function(req, res, next)
{
  DeleteMovie(req, res, next);
});

router.post('/register', function(req, res, next)
{
  ProcessRegistration(req, res, next);
});

router.post('/login', function(req, res, next)
{
  ProcessLogin(req, res, next);
});

router.get('/logout', function(req, res, next)
{
  ProcessLogout(req, res, next);
});
export default router;
