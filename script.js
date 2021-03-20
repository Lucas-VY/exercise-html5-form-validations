/* prevent default submit */
let submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('submit', function (e) {
    e.preventDefault();


/* inputs  */
let error = false

let validateCard = /[0-9]{13,16}/
let validateName = /^[a-z\d\.]{5,}$/
let validatecvc = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$ /
let validateAmount = /^[-+]?[0-9]*[.,]?[0-9]+$/
let validatePostalCode = /(\d{5}([\-]\d{4})?)/
let validateMessage = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,300}$/

/* credit card */
if (!validateCard.test(form.creditcard.value)){
    form.creditcard.classlist.add("is-invalid")
    form.creditcard.classlist.add("alert-danger")
    error = true
} else {
    form.creditcard.classlist.remove("is-valid")
    form.creditcard.classlist.remove("alert-danger")
    form.creditcard.classlist.add("is-valid")
}

/* firstname */
if (form.firstname.value === "" || !validateName.test(form.firstname.value)){
    form.firstname.classlist.add("is-invalid")
    form.firstname.classlist.add("alert.danger")
    error = true
} else {
    form.firstname.classlist.remove("is-invalid")
    form.firstname.classlist.remove("alert-danger")
    form.firstname.classlist.add("is-valid")
}

/* Lastname */
if (form.lastname.value === "" || !validateName.test(form.lastname.value)){
    form.lastname.classlist.add("is-invalid")
    form.lastname.classlist.add("alert.danger")
    error = true
} else {
    form.lastname.classlist.remove("is-invalid")
    form.lastname.classlist.remove("alert-danger")
    form.lastname.classlist.add("is-valid")
}

/* CVC number */
if (!validatecvc.test(form.cvc.value)){
    form.cvc.classlist.add("is.invalid")
    form.cvc.classlist.add("alert-danger")
    error = true
} else {
    form.cvc.classlist.remove("is-invalid")
    form.cvc.classlist.remove("alert-danger")
    form.cvc.classlist.add("is-valid")
}

/* amount number */
if (!validateamount.test(form.amount.value)){
    form.amount.classlist.add("is.invalid")
    form.amount.classlist.add("alert-danger")
    error = true
} else {
    form.amount.classlist.remove("is-invalid")
    form.amount.classlist.remove("alert-danger")
    form.amount.classlist.add("is-valid")
}

/* City */
if (form.city.value === "" || !validatecity.test(form.city.value)){
    form.city.classlist.add("is-invalid")
    form.city.classlist.add("alert.danger")
    error = true
} else {
    form.city.classlist.remove("is-invalid")
    form.city.classlist.remove("alert-danger")
    form.city.classlist.add("is-valid")
}

/* state */
if (!validateState.test(form.State.value)){
    form.State.classlist.add("is-invalid")
    form.State.classlist.add("alert-danger")
    error = true
} else {
    form.State.classlist.remove("is-valid")
    form.State.classlist.remove("alert-danger")
    form.State.classlist.add("is-valid")
}

/* Postal Code */
if (!validatePostalCode.test(form.PostalCode.value)){
    form.PostalCode.classlist.add("is.invalid")
    form.PostalCode.classlist.add("alert-danger")
    error = true
} else {
    form.PostalCode.classlist.remove("is-invalid")
    form.PostalCode.classlist.remove("alert-danger")
    form.PostalCode.classlist.add("is-valid")
}

