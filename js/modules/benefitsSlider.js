import { animate } from './helpers';

export const benefitsSlider = ({
    blockId = 'benefits',
    wrapper = '.benefits-wrap',
    items = '.benefits__item',
    arrows = '.benefits__arrow',
    arrowLeft = '.benefits__arrow--left',
    arrowRight = '.benefits__arrow--right',
}) => {
    const benefitsBlock = document.getElementById(blockId);

    try {
        if (!benefitsBlock) {
            throw new Error('BenefitsSliderBlock has not found (benefitsSlider.js)');
        }
    } catch (e) {
        console.error(e);
    }

    const benefitsWrap = benefitsBlock.querySelector(wrapper);
    const benefitsItems = benefitsBlock.querySelectorAll(items);

    try {
        if (!(benefitsWrap && benefitsItems)) {
            throw new Error('Where is the ben. wrapper OR items? (benefitsSlider.js)');
        }
    } catch (e) {
        console.error(e);
    }

    let activeIndex = 0;

    const renderForMobile = active => {
        benefitsWrap.style.justifyContent = 'center';
        benefitsWrap.innerHTML = '';

        benefitsWrap.append(benefitsItems[active]);
    };

    const renderForPc = active => {
        benefitsWrap.style.justifyContent = '';
        benefitsWrap.innerHTML = '';

        let nextIndex = active + 1 >= benefitsItems.length ? active - benefitsItems.length + 1 : active + 1;
        let nextNextIndex = active + 2 >= benefitsItems.length ? active - benefitsItems.length + 2 : active + 2;

        benefitsWrap.append(benefitsItems[active], benefitsItems[nextIndex], benefitsItems[nextNextIndex]);
    };

    const renderSlider = active => {
        if (document.documentElement.clientWidth > 576) {
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    benefitsWrap.style.opacity = 1 - progress;
                },
            });

            renderForPc(active);

            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    benefitsWrap.style.opacity = progress;
                },
            });
        } else {
            renderForMobile(active);
        }
    };
    benefitsBlock.addEventListener('click', e => {
        if (e.target.closest(arrows)) {
            if (e.target.closest(arrowLeft)) {
                activeIndex--;
                if (activeIndex < 0) activeIndex = benefitsItems.length - 1;
            } else if (e.target.closest(arrowRight)) {
                activeIndex++;
                if (activeIndex > benefitsItems.length - 1) activeIndex = 0;
            }
            renderSlider(activeIndex);
        }
    });
    renderSlider(activeIndex);
};
