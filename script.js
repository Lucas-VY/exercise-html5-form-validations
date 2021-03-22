let form = document.querySelector('#register');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let error = false;

    /* alerta */
    let alertmsg = document.querySelector('#red-alert');

    /* Card number */
    if (form.cardnumber.value === '') {
        form.cardnumber.classList.add('is-invalid');
        document.querySelector('#error_cardnumber').innerHTML = "Debe Ingresar un numero de tarjeta";
        error = true;

    } else if (/[0-9]{13,16}/.test(form.cardnumber.value)) {
        form.cardnumber.classList.add('is-valid');
        form.cardnumber.classList.remove('is-invalid');
        document.querySelector('#error_cardnumber').innerHTML = "El numero de la tarjeta debe corresponder a una tarjeta valida de 16 caracteres";
        
    }

    /* CVC validacion */
    if (form.cvc.value === '') {
        form.cvc.classList.add('is-invalid');
        document.querySelector('#error_cvc').innerHTML = "Debe Ingresar un numero valido";
        error = true;

    } else if (/[0-9]{3}/.test(form.cvc.value)) {
        form.cvc.classList.add('is-valid');
        form.cvc.classList.remove('is-invalid');
        document.querySelector('#error_cvc').innerHTML = "El cvc de 3 caracteres debe ser valido";

    }

    /* Amount validacion */
    if (form.amount.value === '') {
        form.amount.classList.add('is-invalid');
        document.querySelector('#error_amount').innerHTML = "Debe Ingresar un amount";
        error = true;

    } else if (/^[0-9]{3,7}$/.test(form.amount.value)) {
        form.amount.classList.add('is-valid');
        form.amount.classList.remove('is-invalid');
        document.querySelector('#error_amount').innerHTML = "La cantidad no puede ser mas de 7 digitos";

    }

    /* firstname */
    if (form.firstname.value === '') {
        form.firstname.classList.add('is-invalid');
        document.querySelector('#error_firstname').innerHTML = "Debe Ingresar un Nombre";
        error = true;

    } else if (/^[a-zA-Z][a-zA-Z0-9 ]+$/.test(form.firstname.value)) {
        form.firstname.classList.remove('is-invalid');
        form.firstname.classList.add('is-valid');
        document.querySelector('#error_firstname').innerHTML = "El nombre solo puede contener letras y maximo de 15 caracteres";

    }


    /* lastname */
    if (form.lastname.value === '') {
        form.lastname.classList.add('is-invalid');
        document.querySelector('#error_lastname').innerHTML = "Debe Ingresar un apellido";
        error = true;

    } else if (/^[a-zA-Z][a-zA-Z0-9 ]+$/.test(form.lastname.value)) {
        form.lastname.classList.add('is-valid');
        form.lastname.classList.remove('is-invalid');
        document.querySelector('#error_lastname').innerHTML = "El apellido solo puede contener letras";


    }


    /* city */
    if (form.city.value === '') {
        form.city.classList.add('is-invalid');
        document.querySelector('#error_city').innerHTML = "Debe escoger una ciudad";
        error = true;

    } else if (/^[a-zA-Z][a-zA-Z0-9 ]+$/.test(form.city.value)) {
        form.city.classList.add('is-valid');
        form.city.classList.remove('is-invalid');
        document.querySelector('#error_city').innerHTML = "Debe escoger una ciudad valida";

    }

    /* State */
    if (form.state.value === 'Pick a State') {
        form.state.classList.add('is-invalid');
        document.querySelector('#error_state').innerHTML = "Debe escoger un State";
        error = true;

    } else if (/^[A-Za-z0-9_]{1,15}$/.test(form.state.value)) {
        form.state.classList.add('is-valid');
        form.state.classList.remove('is-invalid');
        document.querySelector('#error_state').innerHTML = "El state debe ser valido con sus datos personales";


    }

    /* Postal code */
    if (form.postalcode.value === '') {
        form.postalcode.classList.add('is-invalid');
        document.querySelector('#error_postalcode').innerHTML = "Debe Ingresar un codigo de postal";
        error = true;

    } else if (/(\d{5}([\-]\d{4})?)/.test(form.postalcode.value)) {
        form.postalcode.classList.add('is-valid');
        form.postalcode.classList.remove('is-invalid');
        document.querySelector('#error_postalcode').innerHTML = "El codigo de postal debe ser valido";


    }

    /* RED ALERT */
    if (error) {
        alertmsg.classList.remove('d-none');
        alertmsg.classList.add('d-block');

    } else {
        alertmsg.classList.remove('d-block');
        alertmsg.classList.add('d-none');
    }
})