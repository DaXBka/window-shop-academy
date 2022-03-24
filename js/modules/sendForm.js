import { validationSubmit } from './validation';
import { review } from './helpers';

export const sendForm = ({
    formClass,
    url,
    loaderClass = '.loader-box',
    succesClass = '.alert-success',
    dangerClass = '.alert-danger',
    someElem = [],
}) => {
    const forms = document.querySelectorAll(formClass);

    const loader = document.querySelector(loaderClass);

    const succes = document.querySelector(succesClass);
    const danger = document.querySelector(dangerClass);

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();

            const inputs = form.querySelectorAll('input');

            if (validationSubmit(inputs)) {
                const formData = new FormData(form);
                const data = {};

                formData.forEach((value, key) => {
                    data[key] = value;
                });

                if (someElem.length > 0) {
                    someElem.forEach(item => {
                        if (item.type == 'input') {
                            const someInput = document.getElementById(item.id);

                            if (someInput) {
                                data[item.id] = someInput.value;
                            }
                        } else if (item.type == 'block') {
                            const someBlock = document.getElementById(item.id);

                            if (someBlock) {
                                data[item.id] = someBlock.textContent;
                            }
                        }
                    });
                }

                form.reset();
                loader.style.display = 'block';

                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then(response => response.json())
                    .then(() => {
                        loader.style.display = '';

                        review.show(succes, '', 'flex');
                        setTimeout(() => review.hide(succes), 3000);
                    })
                    .catch(error => {
                        loader.style.display = '';

                        review.show(danger, '', 'flex');
                        setTimeout(() => review.hide(danger), 3000);
                    });
            }
        });
    });
};
