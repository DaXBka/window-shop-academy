import { animate } from './helpers';

export const modal = ({
    modalClass = '.header-modal',
    overlayClass = '.overlay',
    btnOpenClass = '.button',
    btnCloseClass = '.header-modal__close',
}) => {
    const modalWindow = document.querySelector(modalClass);
    const overlay = document.querySelector(overlayClass);

    const openModal = () => {
        modalWindow.style.opacity = 0;
        overlay.style.opacity = 0;

        modalWindow.style.display = 'block';
        overlay.style.display = 'block';

        animate({
            duration: 150,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modalWindow.style.opacity = progress;
                overlay.style.opacity = progress;
            },
        });
    };

    const closeModal = () => {
        modalWindow.style.opacity = 1;
        overlay.style.opacity = 1;

        animate({
            duration: 150,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modalWindow.style.opacity = 1 - progress;
                overlay.style.opacity = 1 - progress;

                if (progress === 1) {
                    modalWindow.style.display = '';
                    overlay.style.display = '';
                }
            },
        });
    };

    document.addEventListener('click', e => {
        if (e.target.closest(btnOpenClass)) {
            e.preventDefault();
            openModal();
        } else if (e.target.closest(overlayClass) || e.target.matches(btnCloseClass)) {
            closeModal();
        }
    });
};
