import validator from 'validator';

const formsList = document.querySelectorAll('.main-content form');

function validateFormElement(element, form) {
    const value = element ? element.value : false;
    let errors = [];

    if (validator.isLength(value, { min: 5 })) {
        element.parentElement.classList.remove('field--error');

        if (element.type == 'email') {
            if (!validator.isEmail(value)) {
                element.parentElement.classList.add('field--error');
                errors.push(element.type);
            } else {
                element.parentElement.classList.remove('field--error');
            }
        }

        if (element.type == 'password') {
            if (!validator.isLength(value, { min: 5 })) {
                element.parentElement.classList.add('field--error');
                errors.push(element.type);
            } else {
                element.parentElement.classList.remove('field--error');
            }
        }
    } else {
        element.parentElement.classList.add('field--error');
    }

    enableSubmitBtn(errors, form);
}

function enableSubmitBtn(errors, form) {
    const submitButton = form.querySelector('.primary-button');

    form.querySelectorAll('.field input, .field textarea').forEach((input) => {
        const parentEl = input.parentElement;

        if (!input.value || parentEl.classList.contains('field--error')) {
            errors.push('error');
        }
    })

    if (!errors.length) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
}

if (formsList.length) {
    formsList.forEach((form) => {
        // form.querySelector('button').setAttribute('disabled', 'disabled');
        form.addEventListener('blur', (event) => {
            let eventTag = event.target.tagName.toLowerCase();

            if (eventTag === 'input' || eventTag === 'textarea') {
                validateFormElement(event.target, form);
            }
        }, true );

    })
}
