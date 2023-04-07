// query selector to select form tag
const form = document.querySelector('form');

// query selectors to select form's input tags
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirmEmail');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// query selectors to select error-span-elements of the corresponding input tags
const firstNameErrorMessage = document.querySelector('.firstNameErrorMessage');
const lastNameErrorMessage = document.querySelector('.lastNameErrorMessage');
const emailErrorMessage = document.querySelector('.emailErrorMessage');
const confirmEmailErrorMessage = document.querySelector('.confirmEmailErrorMessage');
const passwordErrorMessage = document.querySelector('.passwordErrorMessage');
const confirmPasswordErrorMessage = document.querySelector('.confirmPasswordErrorMessage');

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
//also checks if password and confirmPassword entered by the user are same or not.
function validateForm() {
    // to check if user entered first name is valid or not
    if (firstName.value === '') {
        firstNameErrorMessage.innerText = " (First name cannot be empty!)";
    } else{
        firstNameErrorMessage.innerText = "*";
    }

    // to check if user entered last name is valid or not
    if (lastName.value === '') {
        lastNameErrorMessage.innerText = " (Last name cannot be empty!)";
    } else{
        lastNameErrorMessage.innerText = "*";
    }

    // to check if user entered email is valid or not
    if(!(email.value !== '' && validateEmail(email.value))){
        emailErrorMessage.innerText = " (Invalid email id entered!)"
    } else{
        emailErrorMessage.innerText = "*";
    }

    // to check if both email and confirmEmail are same or not
    if (email.value !== confirmEmail.value) {
        confirmEmailErrorMessage.innerText = " (Confirm-Email must be same as the email above!)"
    } else{
        confirmEmailErrorMessage.innerText = "*";
    }

    // to check if user entered password is valid or not
    if (password.value === '' || password.value.length<6) {
        passwordErrorMessage.innerText = " (Password cannot be empty & must be minimum 6 characters!)"
    } else{
        passwordErrorMessage.innerText = "*";
    }

    // to check if both password and confirmPassword are same or not
    if (password.value !== confirmPassword.value) {
        confirmPasswordErrorMessage.innerText = " (Confirm-Password must be same as the password above!)"
    } else{
        confirmPasswordErrorMessage.innerText = "*";
    }
}