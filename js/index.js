import { timer } from './modules/timer';
import { calculator } from './modules/calculator';
import { benefitsSlider } from './modules/benefitsSlider';
import { scrollButton } from './modules/scrollButton';
import { modal } from './modules/modal';

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

calculator(100, {
    id: 'calc',
    selectTypeId: '#calc-type',
    selectMaterialId: '#calc-type-material',
    inputSizeId: '#calc-input',
    inputTotalId: '#calc-total',
});

benefitsSlider({
    blockId: 'benefits',
    wrapper: '.benefits-wrap',
    items: '.benefits__item',
    arrows: '.benefits__arrow',
    arrowLeft: '.benefits__arrow--left',
    arrowRight: '.benefits__arrow--right',
});

scrollButton();

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
