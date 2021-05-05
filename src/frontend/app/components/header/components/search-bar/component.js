import {Icon, ICON_TYPES} from '../../../common/icon/index.js';
import {SearchBarInput} from '../search-bar-input/index.js';

import styles from './styles.module.scss';

export function SearchBar() {
    const searchBar = document.createElement('div');
    const searchButton = document.createElement('button');

    searchButton.append(Icon(ICON_TYPES.Search));
    searchButton.classList.add('btn', 'btn-light'); 
    searchBar.classList.add(styles.searchBar);
    searchBar.append(SearchBarInput(), searchButton);

    return searchBar;
}
