import { review } from './helpers';

export const imageModal = () => {
    const imgBlock = document.getElementById('documents');
    const overlay = document.querySelector('.overlay');

    imgBlock.insertAdjacentHTML(
        'beforeend',
        `
        <div class="preview">
            <img src="images/documents/original/document4.jpg">
            <div>
                <span class="img-close">x</span>
            </div>
        </div>
        `
    );

    document.addEventListener('click', e => {
        if (e.target.closest('.sertificate-document')) {
            e.preventDefault();

            review.show(imgBlock.querySelector('.preview'), overlay);
        } else if (e.target.closest('.img-close') || e.target.closest('.overlay')) {
            review.hide(imgBlock.querySelector('.preview'), overlay);
        }
    });
};
