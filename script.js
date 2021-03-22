let form = document.querySelector('#register');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let error = false;

    let alertmsg = document.querySelector('#red-alert');





    /* Card number */
    if (form.cardnumber.value === '') {
        form.cardnumber.classList.add('is-invalid');
        document.querySelector('#error_cardnumber').innerHTML = "Debe Ingresar un numero de tarjeta";
        error = true;

    } else if (/[0-9]{13}/.test(form.cardnumber.value)) {
        form.cardnumber.classList.add('is-valid');
        document.querySelector('#error_cardnumber').innerHTML = "El numero de la tarjeta debe corresponder a una tarjeta valida";
        error = true;
    } else {
        form.cardnumber.classList.remove('is-invalid');
    }

    /* CVC validacion */
    if (form.cvc.value === '') {
        form.cvc.classList.add('is-invalid');
        document.querySelector('#error_cvc').innerHTML = "Debe Ingresar un numero valido";
        error = true;

    } else if (/[0-9]{3}/.test(form.cvc.value)) {
        form.cvc.classList.add('is-valid');
        document.querySelector('#error_cvc').innerHTML = "El cvc debe ser valido";
        error = true

    } else {
        form.cvc.classList.remove('is-invalid');
    }


    /* Amount validacion */
    if (form.amount.value === '') {
        form.amount.classList.add('is-invalid');
        document.querySelector('#error_amount').innerHTML = "Debe Ingresar un amount";
        error = true;

    } else if (/[0-9]{3,8}/.test(form.amount.value)) {
        form.amount.classList.add('is-valid');
        document.querySelector('#error_amount').innerHTML = "El amount debe de ser correcto";
        error = true;

    } else {
        form.amount.classList.remove('is-invalid');
    }


    /* firstname */
    if (form.firstname.value === '') {
        form.firstname.classList.add('is-invalid');
        document.querySelector('#error_firstname').innerHTML = "Debe Ingresar un Nombre";
        error = true;

    } else if (/^[a-z\d\.]{5,12}$/.test(form.firstname.value)) {
        form.firstname.classList.add('is-valid');
        document.querySelector('#error_firstname').innerHTML = "El nombre solo puede contener letras";
        error = true;

    } else {
        form.firstname.classList.remove('is-invalid');
    }



    /* lastname */
    if (form.lastname.value === '') {
        form.lastname.classList.add('is-invalid');
        document.querySelector('#error_lastname').innerHTML = "Debe Ingresar un apellido";
        error = true;

    } else if (/^[a-z\d\.]{5,}$/.test(form.lastname.value)) {
        form.lastname.classList.add('is-valid');
        document.querySelector('#error_lastname').innerHTML = "El apellido solo puede contener letras";
        error = true;

    } else {
        form.lastname.classList.remove('is-invalid');
    }


    /* city */
    if (form.city.value === '') {
        form.city.classList.add('is-invalid');
        document.querySelector('#error_city').innerHTML = "Debe escoger una ciudad";
        error = true;

    } else if (/^[a-z\d\.]{5,}$/.test(form.city.value)) {
        form.city.classList.add('is-valid');
        document.querySelector('#error_city').innerHTML = "Debe escoger una ciudad valida";
        error = true;

    } else {
        form.city.classList.remove('is-invalid');
    }


    /* State */
    if (form.state.value === 'Pick a State') {
        form.state.classList.add('is-invalid');
        document.querySelector('#error_state').innerHTML = "Debe escoger un State";
        error = true;

    } else if (/^[a-z\d\.]{5,}$/.test(form.state.value)) {
        form.state.classList.add('is-valid');
        document.querySelector('#error_state').innerHTML = "El state debe ser valido con sus datos personales";
        error = true;

    } else {
        form.state.classList.remove('is-invalid');
    }


    /* Postal code */
    if (form.postalcode.value === '') {
        form.postalcode.classList.add('is-invalid');
        document.querySelector('#error_postalcode').innerHTML = "Debe Ingresar un codigo de postal";
        error = true;

    } else if (/(\d{5}([\-]\d{7})?)/.test(form.postalcode.value)) {
        form.postalcode.classList.add('is-valid');
        document.querySelector('#error_postalcode').innerHTML = "El codigo de postal debe ser valido";
        error = true;

    } else {
        form.postalcode.classList.remove('is-invalid');
    }


    /* RED ALERT */
    if (error) {
        alertmsg.classList.remove('d-none');
        alertmsg.classList.add('d-block');

    } else {
        alertmsg.classList.add('d-none');
        alertmsg.classList.remove('d-block');
    }
})
