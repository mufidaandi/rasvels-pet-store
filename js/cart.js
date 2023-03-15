const cart = [];

function addItemToCart(userId, item) {
    const userCart = carts[userId];
    const existingItem = userCart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      userCart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1
      });
    }
  }
  