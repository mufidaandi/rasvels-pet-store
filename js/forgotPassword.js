// query selector to select form tag
const form = document.querySelector('form');

// query selectors to select form's input tags
const email = document.getElementById('email');

// query selectors to select error-span-elements of the corresponding input tags
const emailErrorMessage = document.querySelector('.emailErrorMessage');

//event listener that gets activated when the button is clicked
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

//function that checks if any of the mandatory form fields are left empty.
//also checks if password and confirmPassword entered by the user are same or not.
function validateForm() {
    if(!(email.value !== '' && validateEmail(email.value))){
        emailErrorMessage.innerText = " (Invalid email id entered!)"
    } else{
        emailErrorMessage.innerText = "*";
    }
}