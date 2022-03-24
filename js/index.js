import { timer } from './modules/timer';
import { calculator } from './modules/calculator';
import { slider } from './modules/slider';
import { scrollButton } from './modules/scrollButton';
import { modal } from './modules/modal';
import { aboutAnimation } from './modules/aboutAnimation';
import { imageModal } from './modules/imageModal';
import { validation } from './modules/validation';
import { sendForm } from './modules/sendForm';
import { scrollLinks } from './modules/scrollLinks';

timer({
    id: 'timer1',
    timerDays: '.count_1 span',
    timerHours: '.count_2 span',
    timerMinutes: '.count_3 span',
    timerSeconds: '.count_4 span',
});

timer({
    id: 'timer2',
    timerDays: '.count_1 span',
    timerHours: '.count_2 span',
    timerMinutes: '.count_3 span',
    timerSeconds: '.count_4 span',
});

calculator(2000, {
    id: 'calc',
    selectTypeId: '#calc-type',
    selectMaterialId: '#calc-type-material',
    inputSizeId: '#calc-input',
    inputTotalId: '#calc-total',
});

modal({
    modalClass: '.header-modal',
    overlayClass: '.overlay',
    btnOpenClass: '.button',
    btnCloseClass: '.header-modal__close',
});

modal({
    modalClass: '.services-modal',
    overlayClass: '.overlay',
    btnOpenClass: '.service-button',
    btnCloseClass: '.services-modal__close',
});

slider({
    blockId: 'benefits',
    wrapper: '.benefits-wrap',
    items: '.benefits__item',
    arrows: '.benefits__arrow',
    arrowLeft: '.benefits__arrow--left',
    arrowRight: '.benefits__arrow--right',
    count: 3,
});

slider({
    blockId: 'services',
    wrapper: '.services__wrap',
    items: '.services__item',
    arrows: '.services__arrow',
    arrowLeft: '.services__arrow--left',
    arrowRight: '.services__arrow--right',
    count: 2,
});

sendForm({
    formClass: 'form',
    url: 'https://jsonplaceholder.typicode.com/posts',
    loaderClass: '.loader-box',
    successClass: '.alert-success',
    dangerClass: '.alert-danger',
    someElem: [
        {
            id: 'calc-total',
            type: 'input',
        },
    ],
});

scrollLinks();
validation();
imageModal();
scrollButton();
aboutAnimation();
