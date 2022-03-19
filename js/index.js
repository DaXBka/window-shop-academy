import { timer } from './modules/timer';
import { calculator } from './modules/calculator';
import { benefitsSlider } from './modules/benefitsSlider';

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
