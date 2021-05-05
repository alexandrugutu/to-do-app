const {Router} = require('express');
const router = Router();
const {
    getMovies,
    getMovieById,
    deleteMovieById,
    createMovie,
    updateMovie
} = require('./helpers');

router.get('/movies', getMovies);
router.get('/movies/:id', getMovieById);
router.delete('/movies/:id', deleteMovieById);
router.post('/movies', createMovie);
router.put("/movies/:id", updateMovie);

module.exports = router;