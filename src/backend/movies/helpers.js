const e = require('express');
const db = require("../db.json");

function getMovies(req, res) {
    const { sort, q } = req.query;

    setTimeout(function() {
    
        if (q) {
            return res.json(db.movies.filter(movie => { 
                return movie.title.toLowerCase().includes(q.toLowerCase());
            }));
        }
    
        return res.json(db.movies.sort((m1, m2) => m2.id - m1.id).slice(0, 50));
    }, 1000);
}

function getMovieById(req, res) {
    const { id } = req.params;
    const desiredMovie = db.movies.find((movie) => movie.id === id);

    setTimeout(function() {
        if (desiredMovie) {
            res.json(desiredMovie);
        } else {
            res.send(404, 'NO such movie!');
        }
    }, 1000);
}

function deleteMovieById(req, res) {
    const { id } = req.params; // {id: 1, page: 3, scrollPosition: 350 }
    db.movies = db.movies.filter(movie => movie.id !== +id);
    res.json(id);
};

function createMovie(req, res) {
    const movie = {
        ...req.body,
        id: `${Date.now()}`
    };
    // console.log(req.body);
    db.movies.push(movie); //изменица в случае с MongoDB
    setTimeout(function(){
        res.status(201).json(movie);
    }, 2000);
    
};

function updateMovie(req, res) {
    const { id: unimportantId, ...changes } = req.body;
    const { id } = req.params;
    const targetMovieIndex = db.movies.findIndex(movie => movie.id === +id);


    db.movies[targetMovieIndex] = { ...db.movies[targetMovieIndex], ...changes };

    res.status(200).json(db.movies[targetMovieIndex]);
}

module.exports = {
    getMovies,
    getMovieById,
    deleteMovieById,
    createMovie,
    updateMovie
};