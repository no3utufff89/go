const callbackTelInput = document.querySelector('.js-telMask');
const telMask = new Inputmask('+7 (999) 999-99-99');
telMask.mask(callbackTelInput);


const justValidate = new JustValidate('.callBack-form')
justValidate
    .addField('.validate-name-js', [
        {
            rule: 'required',
            errorMessage: 'Неодходимо заполнить поле',
        },
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Имя не короче 2 символов',
        },

    ])