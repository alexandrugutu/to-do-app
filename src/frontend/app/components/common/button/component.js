export function Button({
    classList = 'btn btn-success',
    content = '',
    clickHandler,
    type = 'button'
}) {
    const btn = document.createElement('button');

    btn.setAttribute('type', type);
    btn.classList.add(...classList.split(' '));
    btn.innerHTML = content;
    
    if(clickHandler) {
        btn.addEventListener('click', clickHandler);
    }

    return btn;
}