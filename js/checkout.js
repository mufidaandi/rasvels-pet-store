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
});