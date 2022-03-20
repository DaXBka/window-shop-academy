import { animate } from './helpers';

export const scrollButton = () => {
    const firstBlock = document.getElementById('offer');
    const header = document.getElementById('header');
    const nav = document.getElementById('navigation');
    const btn = document.querySelector('.smooth-scroll');

    const toScrollY = firstBlock.clientHeight + header.clientHeight + nav.clientHeight;

    let isBtn = false;

    const changeDisplayBtn = e => {
        if (scrollY < toScrollY) {
            if (!isBtn) {
                btn.style.opacity = 1;

                if (e) {
                    animate({
                        duration: 200,
                        timing(timeFraction) {
                            return timeFraction;
                        },
                        draw(progress) {
                            btn.style.opacity = 1 - progress;
                            if (progress === 1) {
                                btn.style.display = 'none';
                            }
                        },
                    });
                } else {
                    btn.style.display = 'none';
                }

                isBtn = true;
            }
        } else {
            if (isBtn) {
                btn.style.opacity = 0;

                animate({
                    duration: 200,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        btn.style.opacity = progress;
                    },
                });
                btn.style.display = 'block';

                isBtn = false;
            }
        }
    };

    document.addEventListener('scroll', e => {
        changeDisplayBtn(e);
    });

    btn.addEventListener('click', () => {
        scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    changeDisplayBtn();
};
