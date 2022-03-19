import { addZero } from './helpers';

export const timer = ({ id, timerDays, timerHours, timerMinutes, timerSeconds }) => {
    const timer = document.getElementById(id);

    const daysTimer = timer.querySelector(timerDays);
    const hoursTimer = timer.querySelector(timerHours);
    const minutesTimer = timer.querySelector(timerMinutes);
    const secondsTimer = timer.querySelector(timerSeconds);

    const daysRemaining = +timer.dataset.days || 7;

    let isDeadline = false;
    let idInterval;

    const getTimeRemaining = () => {
        const dateNow = new Date();
        const dateToRemaining = dateNow.toString().split(' ');

        dateToRemaining[2] = +dateToRemaining[2] + daysRemaining;
        const dateStop = new Date(dateToRemaining.slice(1, 4));

        const timeRemaining = (dateStop.getTime() - dateNow.getTime()) / 1000;
        if (timeRemaining < 0) isDeadline = true;

        const days = Math.floor(timeRemaining / (3600 * 24));
        const hours = Math.floor(timeRemaining / 3600) % 24;
        const minutes = Math.floor(timeRemaining / 60) % 60;
        const seconds = Math.floor(timeRemaining % 60);

        return { days, hours, minutes, seconds };
    };

    const updateTimer = () => {
        const getTime = getTimeRemaining();

        if (isDeadline) {
            clearInterval(idInterval);
            return;
        }

        daysTimer.textContent = addZero(getTime.days);
        hoursTimer.textContent = addZero(getTime.hours);
        minutesTimer.txetContent = addZero(getTime.minutes);
        secondsTimer.textContent = addZero(getTime.seconds);
    };

    try {
        if (!(timerDays && timerHours && timerMinutes && timerSeconds)) {
            throw new Error('Where is the classes for the timer? (Module: timer.js).');
        }
        if (!(daysTimer && hoursTimer && minutesTimer && secondsTimer)) {
            throw new Error('Classes for modules/timer.js are faulty.');
        }
    } catch (e) {
        return;
    }

    updateTimer();

    idInterval = setInterval(updateTimer, 1000);
};
