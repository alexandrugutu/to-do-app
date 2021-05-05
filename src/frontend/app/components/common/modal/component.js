import { Button } from '../button';
import { closeModal } from './helpers';
import styles from './styles.module.scss';

export function Modal({
    title,
    body,
    hasFooterCloseButton,
    footerButtons = []
}) {
    document.querySelector('.modal')?.remove();

    const modal = document.createElement('div');

    modal.classList.add('modal', styles.show);
    modal.setAttribute('tabindex', '-1');
    modal.append(ModalDialog({ title, body, hasFooterCloseButton, footerButtons }));

    return modal;
}

function ModalDialog({
    title,
    body,
    hasFooterCloseButton,
    footerButtons
}) {
    const modalDialog = document.createElement('div');

    modalDialog.classList.add('modal-dialog');
    modalDialog.append(ModalContent({ title, body, hasFooterCloseButton, footerButtons }));
    return modalDialog;
}
function ModalContent({
    title,
    body,
    hasFooterCloseButton,
    footerButtons
}) {
    const modalContent = document.createElement('div');

    modalContent.classList.add('modal-content');
    modalContent.append(ModalHeader(title), ModalBody(body), ModalFooter({ hasFooterCloseButton, footerButtons }));

    return modalContent;
}
function ModalHeader(title) {
    const modalHeader = document.createElement('div');

    modalHeader.classList.add('modal-header');
    modalHeader.append(ModalTitle(title), ModalHeaderBtnClose());

    return modalHeader;
}
function ModalBody(body) {
    const modalBody = document.createElement('div');

    modalBody.classList.add('modal-body');
    if (typeof body === 'string') {
        modalBody.innerHTML = body;
    } else {
        modalBody.append(body);
    }
    return modalBody;
}

function ModalFooter({ hasFooterCloseButton, footerButtons }) {
    const modalFooter = document.createElement('div');

    modalFooter.classList.add('modal-footer');
    if (hasFooterCloseButton) {
        modalFooter.append(ModalFooterBtnClose());
    }
    footerButtons.forEach(btn => {
        modalFooter.append(btn)
    })

    return modalFooter;
}
function ModalTitle(title) {
    const modalTitle = document.createElement('h5');

    modalTitle.classList.add('modal-title');
    modalTitle.textContent = title;
    return modalTitle;
}
// function closeModal = () => {document.querySelector('.modal').remove();}

function ModalHeaderBtnClose() {
    const btn = Button({ classList: 'btn-close' });

    btn.addEventListener('click', closeModal);

    return btn;
}

function ModalFooterBtnClose() {
    const btn = Button({
        classList: 'btn btn-secondary',
        content: 'close'
    });

    btn.addEventListener('click', closeModal);

    return btn;
}

// function ModalFooterBtnSubmit() {
//     const btn = Button({classList: 'btn btn-primary'});

//     btn.innerHTML = 'save changes';
//     btn.innerHTML = 'hello';
//     return btn;
// }