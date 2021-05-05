import { Stars } from './../../../common/stars';
import { Button } from '../../../common';
import { Modal } from '../../../common/modal';
import { Movie } from '../movie';
import { fetchWithLoader } from '../../../common/helpers';
import { MoviesService } from '../../../../services/movies.service';
// import { MoviesService } from '../../../../services/movies.service';
import styles from './styles.module.scss';

export function MovieRecommendation({
    id,
    title,
    genres,
    overview,
    releaseDate,
    stars,
    poster
}, {
    hasOpenButton = true,
    hasEditButton = true,
    posterOptions = {
        width: '100%',
        height: '300px'
    },
    cardOptions = {
        hasBorder: true
    }
} = {}) {
    // bootstrap structure
    const card = document.createElement('div');
    const imgEl = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardTitleEl = document.createElement('h5');
    const genreEl = document.createElement('h5');
    const cardTextEl = document.createElement('p');

    card.setAttribute('data-id', id);

    card.classList.add('card', styles.movieRecommendation);

    if (cardOptions.hasBorder) {
        card.classList.add(styles.cardNoBorder);
    }

    imgEl.classList.add('card-img-top');
    cardBody.classList.add('card-body', styles.description);
    cardTitleEl.classList.add('card-title');
    cardTextEl.classList.add('card-text');

    imgEl.src = poster;
    imgEl.style.width = posterOptions.width;
    imgEl.style.height = posterOptions.height;
    // imgEl.setAttribute('height', posterOptions.height);

    cardTitleEl.textContent = title;
    genreEl.textContent = (genres || []).join(); //если надо жанры преобразовать из масива, то: genreEl.textContent = genre.join(); 
    cardTextEl.textContent = overview;

    cardBody.append(Stars(stars), cardTitleEl, cardTextEl);

    if (hasOpenButton) {
        cardBody.append(openMovieButton(id));
    }

    if (hasEditButton) {
        cardBody.append(editMovieButton(id));
    }

    card.append(imgEl, cardBody);

    return card;
}

function openMovie(e) {
    const movieId = e.target.dataset.id;
    const moviesService = new MoviesService();

    moviesService.getMovieById(movieId)
        .then(movie => {
            if (movie) {
                document.body.append(Modal({
                    title: movie.title,
                    body:
                        //'Modal body text goes here',
                        Movie(movie),
                    hasFooterCloseButton: true,
                    footerButtons: [
                        Button({
                            content: 'save'
                        })
                    ]
                }));
            }
        })
        .catch(console.error);
}

function editMovie(e) {
    const movieId = e.target.dataset.id;
    
    const moviesService = new MoviesService();
    moviesService.getMovieById(movieId)
    //     .then(res => {
    //         if (res.status === 404) {
    //             res.text().then(errorMessage => {
    //                 document.body.append(Modal({
    //                     title: errorMessage
    //                 }));
    //             });
    //         } else {
    //             return res.json();
    //         }
    //     })
    .then(data => console.log(data));
}

function openMovieButton(id) {
    const btn = Button({
        classList: `btn btn-success ${styles.btnOpenMovie}`,
        content: 'Open',
        clickHandler: openMovie
    });
    btn.setAttribute('data-id', id);
    // btn.addEventListener('click', openMovie);
    return btn;
}

function editMovieButton(id) {
    const btn = Button({
        classList: 'btn btn-info',
        content: 'Edit',
        clickHandler: editMovie
    });
    btn.setAttribute('data-id', id);

    return btn;
}