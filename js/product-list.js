$(document).ready(function() {
  const productList = $('#product-list');

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    // Create a div for the product card
    const productCard = $('<div class="product-card"></div>');

    // Create an image element for the product image
    const productImage = $('<img>');
    productImage.attr('src', product.images[0]);
    productImage.attr('alt', product.name);
    productImage.attr('height', '200');
    productImage.attr('width', '200');
    productImage.addClass('product-image');

    // Create a div for the product details
    const productDetails = $('<div class="product-details"></div>');

    // Create an h2 element for the product name
    const productName = $('<h2 class="product-name"></h2>');
    productName.text(product.name);

    // Create a p element for the product price
    const productPrice = $('<p class="product-price"></p>');
    productPrice.text(`$${product.price}`);

    // Create a div for the product rating
    const productRating = $('<div class="product-rating"></div>');

    // Create a span element for the product rating value
    const productRatingValue = $('<span class="product-rating-value"></span>');
    productRatingValue.text(Math.floor(Math.random() * 6));

    // Create a span element for the maximum product rating
    const productRatingMax = $('<span class="product-rating-max"></span>');
    productRatingMax.text('/5');

    // Add the rating value and maximum to the rating div
    productRating.append(productRatingValue);
    productRating.append(productRatingMax);

    // Add the product name, price, and rating to the product details
    productDetails.append(productName);
    productDetails.append(productPrice);
    productDetails.append(productRating);

    // Add the product image and details to the product card
    productCard.append(productImage);
    productCard.append(productDetails);

    // Add the product card to the product list
    productList.append(productCard);
  }
});