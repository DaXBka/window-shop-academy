export const addZero = num => (num.toString().length < 2 ? '0' + num : num);

export const animate = ({ timing, draw, duration }) => {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
};

export const review = {
    show(block, overlay) {
        block.style.opacity = 0;
        overlay.style.opacity = 0;

        block.style.display = 'block';
        overlay.style.display = 'block';

        animate({
            duration: 150,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                block.style.opacity = progress;
                overlay.style.opacity = progress;
            },
        });
    },

    hide(block, overlay) {
        block.style.opacity = 1;
        overlay.style.opacity = 1;

        animate({
            duration: 150,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                block.style.opacity = 1 - progress;
                overlay.style.opacity = 1 - progress;

                if (progress === 1) {
                    block.style.display = '';
                    overlay.style.display = '';
                }
            },
        });
    },
};
