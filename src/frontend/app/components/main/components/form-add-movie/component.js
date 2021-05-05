import {Button} from "../../../common/index";
import {addMovie} from "./helpers";
import {formAddMovieClassName} from "./constants";

export function FormAddMovie(){
    const form = document.createElement('form');

    const titleInput = document.createElement('input');
    const descriptionTextarea = document.createElement('textarea');
    const  formSubmitButton = Button({
        content : 'Add movie',
        // clickHandler: addMovie,
        type: 'submit'
    });

    form.addEventListener('submit', addMovie);

    form.classList.add(formAddMovieClassName);
    titleInput.classList.add('form-control', 'mb-3');
    descriptionTextarea.classList.add('form-control', 'mb3-');

    titleInput.value = 'Cars';
    descriptionTextarea.value = 'How Lightning McQueen can win PistonCup Championship';

    form.append(titleInput, descriptionTextarea, formSubmitButton);

    // form.setAttribute('action', '.index.php');
    // form.setAttribute('method', 'post');

    return form;
}