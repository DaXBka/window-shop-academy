export const validationSubmit = inputs => {
    let isNotError = true;

    inputs.forEach(input => {
        input.style.borderColor = '';
        const name = input.getAttribute('name');

        switch (name) {
            case 'fio':
                if (!/[А-яA-z]+/g.test(input.value) || !input.value) {
                    input.style.borderColor = 'red';
                    isNotError = false;
                }
                break;
            case 'phone':
                if (
                    !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
                        input.value
                    ) ||
                    !input.value
                ) {
                    input.style.borderColor = 'red';
                    isNotError = false;
                }
                break;
        }
    });
    return isNotError;
};

export const validation = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', e => {
            const name = e.target.getAttribute('name');
            switch (name) {
                case 'fio':
                    input.value = input.value.replace(/[^А-яA-z]/, '');
                    break;
                case 'phone':
                    input.value = input.value.replace(/[^0-9\+\-\)\( )]/, '');
                    break;
            }
        });
    });
};
