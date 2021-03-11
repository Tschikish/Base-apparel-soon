const form = document.getElementById('form');
const email = document.getElementById('email');

/*
Testing area
const a = 15;
*/

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailVal = email.value;

    //check if it's valid
    if (validateEmail(emailVal)) {
        form.classList.add('error');
    } else {
        form.classList.remove('error');
    }

});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var test = 'git testing string';
    return re.test(String(email).toLowerCase());
}