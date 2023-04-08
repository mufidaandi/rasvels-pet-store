const  deliverCharges = 9.99;



jQuery(document).ready(function () {
    jQuery("#deliverCHarges").text('$' + deliverCharges);
    var userCart = getAllCartItems();
    var subTotal = 0;
    for (let i = 0; i < userCart.length; i++) {
        subTotal += userCart[i].price * userCart[i].quantity;
    }
    var totalAmount = Number(subTotal) + Number(deliverCharges);
    jQuery("#subTotal").text('$' + subTotal);
    jQuery("#totalAmount").text('$' + totalAmount);

    // Check if users click on Place Order, system will remove all items in the cart and redirect to thankyou page
    const myform = document.getElementById("myform");
    myform.addEventListener("submit", function(event) {
    // prevent the form from submitting immediately
    event.preventDefault();
    
    // clear all items in the cart
    localStorage.removeItem("userCart");
    console.log('All items have removed');
    // submit the form programmatically after your code is done executing
    myform.submit();
    });
});

