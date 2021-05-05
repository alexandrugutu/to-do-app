import {Aside} from './components/aside';
import {Content} from './components/content';
// import {Button} from '../common';
import {FormAddMovie} from '../main/components/form-add-movie/component';


export function Main() {
    const main = document.createElement('main');

    main.append( Aside(), Content());

    return main;
}