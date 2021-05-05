export function Icon(type) {
    const icon = document.createElement('i');

    icon.classList.add('fa');
    icon.classList.add(`fa-${type}`);
    return icon;
}