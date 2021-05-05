// import {RatingStars} from '../../../common/rating-stars';
import {MovieRecommendation} from '../movie-recommendation';
import {randomIntFromInterval} from '../../../common/helpers';
// import {fetchWithLoader} from '../../../common/helpers';

import styles from './styles.module.scss';
import { startLoadingSpinner, stopLoadingSpinner } from '../../../common/spinner';
import { MoviesService } from '../../../../services/movies.service';
// import { startLoadingSpinner, stopLoadingSpinner, Spinner } from '../../../common/spinner';


export function Content() {
    const content = document.createElement('section');
    // const span = document.createElement('span');

    // span.textContent = 'Loading...'
    // span.style.color = 'white';
    content.classList.add(styles.content);
    // content.append(span);
    startLoadingSpinner();
    const fr = document.createDocumentFragment(); //fr - fragment
    const moviesService = new MoviesService();

    moviesService.getMovies().then(movies => {
        movies.forEach((movie) => {
            fr.append( MovieRecommendation({
                id: movie.id,
                title: movie.title,
                genres: movie.genres,
                release_date: new Date( movie.release_date).getFullYear(),
                stars: randomIntFromInterval(0, 5),
                overview: movie.overview,
                poster: movie.poster
            }));
        });
        stopLoadingSpinner();
        // span.remove();
        content.append(fr);
    });

    return content;
}