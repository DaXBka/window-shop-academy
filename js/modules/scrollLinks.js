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

            let id = link.getAttribute('href').substring(1);
            if (id == 'order') id += '_1';
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
