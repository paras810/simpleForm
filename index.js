console.log('regex')
const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone');
let validEmail = false;
let validUser = false;
let validPhone = false;
$('#failure').hide()
$('#success').hide()


// console.log(name, phone, email);
name.addEventListener('blur', () => {
    // console.log('name is blured');
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid')
        validUser = true
    }
    else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid')
        validUser = false
    }
})
email.addEventListener('blur', () => {
    // console.log('email is blured');
    //validate email here
    let regex = /^([\_\-\.0-9a-zA-Z]+)@gmail\.com$/;
    // let regex = /^([\-\_\.0-9a-zA-Z]+)@([\-\_\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('email is valid');
        email.classList.remove('is-invalid')
        validEmail = true
    } else {
        console.log('email is not valid');
        email.classList.add('is-invalid')
        validEmail = false

    }

})
phone.addEventListener('blur', () => {
    // console.log('phone is blured');
    //validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid')
        validPhone = true
    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid')
        validPhone = true
    }
})

let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked on submit button');
 console.log(validUser,validEmail,validPhone);

    // submit your form here
    
    if (validEmail && validPhone && validUser) {
        let failure = document.getElementById('failure')
        console.log('phone,email and user are valid. Submiting the form');
        let success = document.getElementById('success')
        success.classList.add('show')
        // failure.classList.remove('show')
        // failure.alert('close')
        $('#success').show()
        $('#failure').hide()
    } else {
        console.log('one out of phone, email or user are not valid. Hence not submitting the form. Please correct the error and try again');
        let failure = document.getElementById('failure')
        failure.classList.add('show')
        // success.classList.remove('show')
        // success.alert('close')
        $('#failure').show()
        $('#success').hide()

    }

})
let close_success = document.getElementById('close_success')
close_success.addEventListener('click',()=>{
    $('#success').hide()
})
let close_failure = document.getElementById('close_failure')
close_failure.addEventListener('click',()=>{
    $('#failure').hide()
})