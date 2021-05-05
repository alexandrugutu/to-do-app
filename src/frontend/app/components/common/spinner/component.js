import styles from './styles.module.scss';

export function Spinner() {
    const spinner = document.createElement('i');

    spinner.className = 'fa fa-3x fa-circle-o-notch fa-spin';
    spinner.classList.add(styles.spinner);

    return spinner;
}

export function LoadingSpinner() {
    const spinner = Spinner();

    spinner.classList.add('loading');

    return spinner;
}
export function startLoadingSpinner() {
    document.body.append(LoadingSpinner());
    
}

export function stopLoadingSpinner() {
    document.body.querySelector('i.loading')?.remove();
}

