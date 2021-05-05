
import { formAddMovieSelector } from "./constants";
import { MovieRecommendation } from "./../movie-recommendation";
import { startLoadingSpinner, stopLoadingSpinner, Spinner } from "../../../common/spinner";
import { fetchWithLoader } from "../../../common/helpers";
import { MoviesService } from "../../../../services/movies.service";
// import { FormAddMovie } from "./component";


export function addMovie(e) {
    e.preventDefault();

    const form = document.querySelector(formAddMovieSelector);
    const titleInput = form.querySelector('input');
    const descriptionTextarea = form.querySelector('textarea');
    const title = titleInput.value;
    const overview = descriptionTextarea.value;

    // console.log(title, description, titleInput, descriptionTextarea);
    document.querySelector('.modal')?.remove();
    // startLoadingSpinner();

    const moviesService = new MoviesService();

    moviesService.postMovie({
        title
    })
        .then(data => {
            const movieRecommendation = MovieRecommendation({
                id: data.id,
                title,
                overview
            });
            
            const qSel = document.querySelector('section');
            qSel.prepend(movieRecommendation);
            document.querySelector('.modal')?.remove();

            // stopLoadingSpinner();

            $.alert({
                title: 'Success!',
                animation: 'zoom',
                closeIcon: true,
                content: `movie "${title}" added with #id ${data.id}`,
                type: 'green',
                autoClose: 'OK|3000',
                backgroundDismiss: true
        });
    })
    // .catch(err => {
    //     stopLoadingSpinner();
    // })
}