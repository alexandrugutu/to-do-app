import { debounce, randomIntFromInterval } from "../../../common/helpers";

import { MovieRecommendation } from "../../../main/components/movie-recommendation";
import { MoviesService } from "../../../../services/movies.service";

import contentStyles from '../../../main/components/content/styles.module.scss'

export function SearchBarInput() {
    const searchBarInput = document.createElement('input');

    searchBarInput.classList.add('search-bar-input', 'form-control');

    const debouncedSearch = debounce(search, 500);
    searchBarInput.addEventListener('keyup', debouncedSearch);

    return searchBarInput;
}

function search(e) {
    const q = e.target.value;
    const moviesService = new MoviesService();

    if (q.length > 3) {
        moviesService.getMovies(q).then(movies => {
                
                const content = document.querySelector(`.${contentStyles.content}`);
                const fr = document.createDocumentFragment(); //fr - fragment

                movies.forEach((movie) => {

                    fr.append(MovieRecommendation({
                        id: movie.id,
                        title: movie.title,
                        genres: movie.genres,
                        release_date: new Date(movie.release_date).getFullYear(),
                        stars: randomIntFromInterval(0, 5),
                        overview: movie.overview,
                        poster: movie.poster
                    }));
                });

                content.innerHTML = '';

                content.append(fr);
        });
    }
}