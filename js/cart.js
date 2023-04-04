function addItemToCart(item) {
  var myJsonData = localStorage.getItem('userCart');
  var userCart = JSON.parse(myJsonData);
    if(userCart === null){
      userCart = [];
      userCart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
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
          quantity: item.quantity
        });
      }
    }
    
    console.log("Item added");
    console.log(userCart);
    localStorage.setItem("userCart", JSON.stringify(userCart));
  }


  function getAllCartItems(){
    var myJsonData = localStorage.getItem('userCart');
    var userCart = JSON.parse(myJsonData);
    return userCart;
  }