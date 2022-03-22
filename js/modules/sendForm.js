import { validationSubmit } from './validation';
import { review } from './helpers';

export const sendForm = () => {
    const forms = document.querySelectorAll('form');
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const loader = document.querySelector('.loader-box');

    const succes = document.querySelector('.alert-success');
    const danger = document.querySelector('.alert-danger');

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
                    .catch(() => {
                        loader.style.display = '';

                        review.show(danger, '', 'flex');
                        setTimeout(() => review.hide(danger), 3000);
                    });
            }
        });
    });
};
