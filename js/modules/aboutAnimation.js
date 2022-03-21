export const aboutAnimation = () => {
    const aboutItems = document.querySelectorAll('.about-inner');

    let count = 0;

    const animationItems = () => {
        aboutItems[count].style.transform = 'scale(120%)';
        if (aboutItems[count - 1]) {
            aboutItems[count - 1].style.transform = '';
        } else {
            aboutItems[aboutItems.length - 1].style.transform = '';
        }
    };

    setInterval(() => {
        animationItems();
        count++;

        if (count >= aboutItems.length) {
            count = 0;
        }
    }, 2500);
};
