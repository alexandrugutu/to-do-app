import {fetchWithLoader} from '../components/common/helpers';
// import { query } from 'express';

export class MoviesService {
    getMovieById(movieId) {
        return fetchWithLoader(`http://localhost:3000/movies/${movieId}`)
        .then(res => res.json());
    }

    getMovies(query) {
        const q = query ? `?q=${query}` : '';
        return fetchWithLoader('http://localhost:3000/movies' + q).then(res => res.json())
    }

    // getMoviesByQuery() {

    //     return fetchWithLoader(`http://localhost:3000/movies?q=${q}`).then(res => res.json())
    // }
    postMovie(movie) {
        const m = {
            title: movie.title,
            overview: movie.overview
        }

        return fetchWithLoader('http://localhost:3000/movies', {
            method: 'POST',
            body: JSON.stringify(m),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
    }
}