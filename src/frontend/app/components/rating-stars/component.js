import { Stars} from '../../stars';

import starsStyles from '../stars/styles.module.scss';
import styles from './styles.module.scss';

export function RatingStars() {
    const stars = Stars(0);

    stars.classList.add(styles.ratingStars);

    stars.childNodes.forEach((star, index) => {
        // console.dir(star);
        star.addEventListener('mouseover', () => {
            stars.childNodes.forEach((prevStar, prevIndex) => {
                if (prevIndex <= index) {
                    prevStar.classList.remove(starsStyles.inactive);
                    prevStar.classList.add(starsStyles.active);
                    
                } else {
                    prevStar.classList.remove(starsStyles.active);
                    prevStar.classList.add(starsStyles.inactive);
                } 
            });
        });
    });

    // stars.addEventListener('mouseenter', (e) =>{
    //     e.target.classList.add('zoom-in');
    // });
    // stars.addEventListener('mouseleave', (e) =>{
    //     e.target.classList.remove('zoom-in');
    // });

    return stars;
}