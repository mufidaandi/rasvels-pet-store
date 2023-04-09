// query selector to select form tag
const form = document.querySelector('form');

// query selectors to select form's input tags
const userName = document.getElementById('userName');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const contact = document.getElementById('contact');
const currentPassword = document.getElementById('currentPassword');
const newPassword = document.getElementById('newPassword');
const confirmNewPassword = document.getElementById('confirmNewPassword');

// query selectors to select error-span-elements of the corresponding input tags
const firstNameErrorMessage = document.querySelector('.firstNameErrorMessage');
const lastNameErrorMessage = document.querySelector('.lastNameErrorMessage');
const contactErrorMessage = document.querySelector('.contactErrorMessage');
const currentPasswordErrorMessage = document.getElementById('.currentPasswordErrorMessage');
const newPasswordErrorMessage = document.getElementById('.newPasswordErrorMessage');
const confirmNewPasswordErrorMessage = document.getElementById('.confirmNewPasswordErrorMessage');

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

//checks if the password has number or not and return true or false
function hasNumber(input) {
    // Regular expression to match any digit
    var regex = /\d+/;
    
    // Test input against the regular expression
    return regex.test(input);
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

    // to check if user entered contact is valid or not
    if (contact.value === '' || contact.value.length<10) {
        contactErrorMessage.innerText = " (Contact cannot be empty!)";
    } else{
        contactErrorMessage.innerText = "*";
    }

    // to check if user entered new password is valid or not
    if(!((newPassword.value.length) >= 8 && hasNumber(newPassword.value) && (newPassword.value !== userName.value))){
        newPasswordErrorMessage.innerText = " (Password must be 8 characters long with a number and not same as username!)";
    }else{
        newPasswordErrorMessage.innerText = "*";
    }

    // to check if both password and confirmPassword are same or not
    if (newPassword.value !== confirmNewPassword.value) {
        confirmNewPasswordErrorMessage.innerText = " (Confirm-Password must be same as the password above!)";
    } else{
        confirmNewPasswordErrorMessage.innerText = "*";
    }
}