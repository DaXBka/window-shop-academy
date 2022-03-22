//
//
// Не нашел способ нормально реализовать модальное окно, так что
// решил сделать скролл до первой формы
//
//

export const scrollLinks = () => {
    const links = document.querySelectorAll('#scroll');

    seamless.polyfill();

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const id = link.getAttribute('href').substring(1) + '_1';
            const section = document.getElementById(id);

            if (section) {
                seamless.scrollIntoView(section, {
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        });
    });
};
