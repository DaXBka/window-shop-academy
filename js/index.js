import { timer } from './modules/timer';
import { calculator } from './modules/calculator';

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
