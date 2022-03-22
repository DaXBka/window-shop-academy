import { animate } from './helpers';
import { review } from './helpers';

export const modal = ({
    modalClass = '.header-modal',
    overlayClass = '.overlay',
    btnOpenClass = '.button',
    btnCloseClass = '.header-modal__close',
}) => {
    const modalWindow = document.querySelector(modalClass);
    const overlay = document.querySelector(overlayClass);

    const openModal = () => {
        review.show(modalWindow, overlay);
    };

    const closeModal = () => {
        review.hide(modalWindow, overlay);
    };

    document.addEventListener('click', e => {
        if (e.target.closest(btnOpenClass)) {
            e.preventDefault();

            const btn = e.target.closest(btnOpenClass + ' a');

            if (btn && btn.dataset.subject) {
                const subName = btn.dataset.subject;
                const subInput = modalWindow.querySelector('input[name="subject"]');
                subInput.value = subName;
            }

            openModal();
        } else if (e.target.closest(overlayClass) || e.target.matches(btnCloseClass)) {
            closeModal();
        }
    });
};
