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
    show(block, overlay, style = 'block') {
        block.style.opacity = 0;
        if (overlay) overlay.style.opacity = 0;

        block.style.display = style;
        if (overlay) overlay.style.display = style;

        animate({
            duration: 150,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                block.style.opacity = progress;
                if (overlay) overlay.style.opacity = progress;
            },
        });
    },

    hide(block, overlay) {
        block.style.opacity = 1;
        if (overlay) overlay.style.opacity = 1;

        animate({
            duration: 150,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                block.style.opacity = 1 - progress;
                if (overlay) overlay.style.opacity = 1 - progress;

                if (progress === 1) {
                    block.style.display = '';
                    if (overlay) overlay.style.display = '';
                }
            },
        });
    },
};
