// query selector to select form tag
const form = document.querySelector('form');

// query selectors to select form's input tags
const email = document.getElementById('email');
const password = document.getElementById('password');

// query selectors to select error-span-elements of the corresponding input tags
const emailErrorMessage = document.querySelector('.emailErrorMessage');
const passwordErrorMessage = document.querySelector('.passwordErrorMessage');

//event listener that gets activated when the button is clicked
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

// function to validate the user entered email address
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

//function that checks if any of the mandatory form fields are left empty.
function validateForm() {
    // to check if user entered email is valid or not
    if(!(email.value !== '' && validateEmail(email.value))){
        emailErrorMessage.innerText = " (Invalid email id entered!)"
    } else{
        emailErrorMessage.innerText = "*";
    }

    // to check if user entered password is valid or not
    if (password.value === '') {
        passwordErrorMessage.innerText = " (Password cannot be empty)"
    } else{
        passwordErrorMessage.innerText = "*";
    }
}