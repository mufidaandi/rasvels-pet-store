// query selector to select form tag
const form = document.querySelector('form');

// query selectors to select form's input tags
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const contact = document.getElementById('contact');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');

// query selectors to select error-span-elements of the corresponding input tags
const firstNameErrorMessage = document.querySelector('.firstNameErrorMessage');
const lastNameErrorMessage = document.querySelector('.lastNameErrorMessage');
const contactErrorMessage = document.querySelector('.contactErrorMessage');
const addressErrorMessage = document.querySelector('.addressErrorMessage');
const cityErrorMessage = document.querySelector('.cityErrorMessage');
const stateErrorMessage = document.querySelector('.stateErrorMessage');

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

    // to check if user entered contact is valid or not
    if (contact.value === '' || contact.value.length<10) {
        contactErrorMessage.innerText = " (Contact cannot be empty!)";
    } else{
        contactErrorMessage.innerText = "*";
    }

    // to check if user entered address is valid or not
    if (address.value === '') {
        addressErrorMessage.innerText = " (Address cannot be empty!)";
    } else{
        addressErrorMessage.innerText = "*";
    }

    // to check if user entered city is valid or not
    if (city.value === '') {
        cityErrorMessage.innerText = " (City cannot be empty!)";
    } else{
        cityErrorMessage.innerText = "*";
    }

    // to check if user entered state is valid or not
    if (state.value === '') {
        stateErrorMessage.innerText = " (State cannot be empty!)";
    } else{
        stateErrorMessage.innerText = "*";
    }

}