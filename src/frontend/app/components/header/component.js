import {HeaderNav} from './components/header-nav';
import {Logo} from '../common/logo';
import {SearchBar} from './components/search-bar';
import {UserControlPanel} from './components/user-control-panel';
import {Button} from '../common/index';
import {Modal} from '../common/modal/component';
import {FormAddMovie} from '../main/components/form-add-movie';

import'./styles.scss';

export function Header() {
    const header = document.createElement('header');

    header.append(Button({
        content: '<i class="fa  fa-plus"></i>',
        clickHandler: openModalToAddMovie
    }), HeaderNav(), Logo(), SearchBar(), UserControlPanel());
    header.classList.add('header', 'mb-3');

    return header; 
}

function openModalToAddMovie(e) {
    const modal = Modal({
        body: FormAddMovie()
    });
    document.body.append(modal);
}