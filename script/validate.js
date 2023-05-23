
const telMask = new Inputmask('+7 (999) 999-99-99');

const justValidateReserveForm = new  JustValidate('.reserve__form');
justValidateReserveForm
    .addField('.time__input_phone-number', [
        {
            rule: 'required',
            errorMessage: 'Укажите имя',
        },

    ])
    .addField('.time__input_mail', [
        {
            rule: 'required',
            errorMessage: 'Укажите e-mail',
        },
    ])

const reserveFormTel = document.querySelector('.time__input_phone-number');
telMask.mask(reserveFormTel);