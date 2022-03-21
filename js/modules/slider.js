import { animate } from './helpers';

export const slider = ({
    blockId = 'benefits',
    wrapper = '.benefits-wrap',
    items = '.benefits__item',
    arrows = '.benefits__arrow',
    arrowLeft = '.benefits__arrow--left',
    arrowRight = '.benefits__arrow--right',
    count = 3,
}) => {
    const sliderBlock = document.getElementById(blockId);

    try {
        if (!sliderBlock) {
            throw new Error('SliderBlock has been not found (slider.js)');
        }
    } catch (e) {
        console.error(e);
    }

    const sliderWrap = sliderBlock.querySelector(wrapper);
    const sliderItems = sliderBlock.querySelectorAll(items);

    try {
        if (!(sliderWrap && sliderItems)) {
            throw new Error('Where is the slider wrapper OR items? (slider.js)');
        }
    } catch (e) {
        console.error(e);
    }

    let activeIndex = 0;

    const renderForMobile = active => {
        sliderWrap.style.justifyContent = 'center';
        sliderWrap.innerHTML = '';

        sliderWrap.append(sliderItems[active]);
    };

    const renderForPc = active => {
        sliderWrap.style.justifyContent = '';
        sliderWrap.innerHTML = '';

        if (count == 3) {
            let nextIndex = active + 1 >= sliderItems.length ? active - sliderItems.length + 1 : active + 1;
            let nextNextIndex = active + 2 >= sliderItems.length ? active - sliderItems.length + 2 : active + 2;

            sliderWrap.append(sliderItems[active], sliderItems[nextIndex], sliderItems[nextNextIndex]);
        } else if (count == 2) {
            let nextIndex = active + 1 >= sliderItems.length ? active - sliderItems.length + 1 : active + 1;

            sliderWrap.append(sliderItems[active], sliderItems[nextIndex]);
        }
    };

    const renderSlider = active => {
        if (document.documentElement.clientWidth > 576) {
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    sliderWrap.style.opacity = 1 - progress;
                },
            });

            renderForPc(active);

            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    sliderWrap.style.opacity = progress;
                },
            });
        } else {
            renderForMobile(active);
        }
    };
    sliderBlock.addEventListener('click', e => {
        if (e.target.closest(arrows)) {
            if (e.target.closest(arrowLeft)) {
                activeIndex--;
                if (activeIndex < 0) activeIndex = sliderItems.length - 1;
            } else if (e.target.closest(arrowRight)) {
                activeIndex++;
                if (activeIndex > sliderItems.length - 1) activeIndex = 0;
            }
            renderSlider(activeIndex);
        }
    });
    renderSlider(activeIndex);
};
