var subTotal = 0;
var totalAmount = 0;

function addItemToCart(item) {
  var myJsonData = localStorage.getItem('userCart');
  var userCart = JSON.parse(myJsonData);
    if(userCart === null){
      userCart = [];
      userCart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      });
    } else {
        existingItem = userCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity = Number(existingItem.quantity) + Number(item.quantity);
      } else {
        userCart.push({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image
        });
      }
    }
    
    localStorage.setItem("userCart", JSON.stringify(userCart));
    alert('Item added to cart!');
  }


  function getAllCartItems(){
    var myJsonData = localStorage.getItem('userCart');
    var userCart = JSON.parse(myJsonData);
    return userCart;
  }

  function displayCart(){
    const tableContainer = $('.cart-table-content table tbody');
    var items = getAllCartItems();
    
    for (let i = 0; i < items.length; i++) {
      const row = $('<tr></tr>');
      const colProduct = $('<td class="cart-pro-name"></td>');
      const colProductLink = $('<a>');
      colProductLink.attr('href', "product-detail.html?productId=" + items[i].id );

      // Product image and name
      const productImg = $('<img class="cart-pro-img mr-4">');
      productImg.attr('src', items[i].image);
      productImg.attr('alt', items[i].name);
      colProductLink.append(productImg);
      colProductLink.append(items[i].name);

      colProduct.append(colProductLink); // img and name

      // Product price
      const colProductPrice = $('<td class="cart-pro-price"></td>');
      const priceText = $('<span></span>');
      priceText.text("$"+ items[i].price);
      colProductPrice.append(priceText);

      // Display quantity
      const colProductQty = $('<td class="cart-pro-qty"></td>');
      const productQty = $('<div class="cart-qty-plus-minus"></div>');
      const productQtyInput = $('<input>');
      productQtyInput.attr('type', 'number');
      productQtyInput.attr('name', 'cartqtybutton');
      productQtyInput.attr('min', 1);
      productQtyInput.attr('value', items[i].quantity);
      productQty.append(productQtyInput);
      colProductQty.append(productQty);

      // Subtotal
      const colProductTotal = $('<td class="cart-pro-subtotal"></td>');
      var productSubTotal = items[i].price * items[i].quantity;
      colProductTotal.append("$" + productSubTotal);

      subTotal += productSubTotal;

      // Delete button
      const removeContainer = $('<td data-label="Remove" class="cart-pro-remove"> </td>');
      const removeIcon = $('<img class="trash-icon" src="images/cart/trash.png" width="25%" height="25%">');
      removeContainer.append(removeIcon);


      row.append(colProduct);
      row.append(colProductPrice);
      row.append(colProductQty);
      row.append(colProductTotal);
      row.append(removeContainer);
      tableContainer.append(row);
    }
    totalAmount = subTotal + 9.99;
    $(".sub-total").text("$" + subTotal);
    $(".total-amount").text("$" + totalAmount);
  }

  $(document).ready(function() {
    displayCart();
    // console.log(getAllCartItems());
    // localStorage.removeItem('userCart');
  });