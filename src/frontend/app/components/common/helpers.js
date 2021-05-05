import {startLoadingSpinner, stopLoadingSpinner} from './spinner';

export function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export function throttle(callback, delay) {
    let throttleTimeout = null;
    let storedEvent = null;

    const throttledEventHandler = event => {
        storedEvent = event;

        const shouldHandleEvent = !throttleTimeout;

        if (shouldHandleEvent) {
            callback(storedEvent);

            storedEvent = null;

            throttleTimeout = setTimeout(() => {
                throttleTimeout = null;

                if (storedEvent) {
                    throttledEventHandler(storedEvent);
                }
            }, delay);
        }
    };

    return throttledEventHandler;
};


export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //min and max max included
}

//ФУНКЦИЯ С ПРОЕКТА!!!!!
export function fetchWithLoader(...args) {
    const timerId = setTimeout(function () {
        startLoadingSpinner();
    }, 300);

    return fetch(...args)
        .then(result => {
            clearTimeout(timerId);
            stopLoadingSpinner();
            return result;
        })
        .catch(error => {
            clearTimeout(timerId);
            stopLoadingSpinner();
            throw error;
        });
};
//-----------------------------------
// ФУНКЦИЯ С ПРОЕКТА!!!!!
// export function fetchWithLoader(...args) {
//     startLoadingSpinner();
//     return fetch(...args)
//         .then(result => {
//             stopLoadingSpinner();
//             return result;
//         })
//         .catch(error => {
//             stopLoadingSpinner();
//             throw error;
//         });
// };