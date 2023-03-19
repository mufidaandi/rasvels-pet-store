var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};

$(document).ready(function() {
  const productList = $('#product-list');
  var urlParameter = getUrlParameter('category').split("_");
  var productCategory = urlParameter[0];
  var productSubCategory = urlParameter[1];

  for (let i = 0; i < products.length; i++) {
    const product = products.filter(value => value.category === productCategory && value.subcategory === productSubCategory)[i];

    // Create a div for the product card
    const productCard = $('<div class="product-card"></div>');

    // Create a div for the product details
    const productLinkStart = $('<a>');
    productLinkStart.attr('href', "product-detail.html?productId="+ product.id)

    // Create an image element for the product image
    const productImage = $('<img>');
    productImage.attr('src', product.images[0]);
    productImage.attr('alt', product.name);
    productImage.attr('height', '200');
    productImage.attr('width', '200');
    productImage.addClass('product-image');

    // Create a div for the product details
    const productDetails = $('<div class="product-details"></div>');

    // Create a p element for the product price
    const productPrice = $('<p class="product-price"></p>');
    productPrice.text(`$${product.price}`);

    // Create an h2 element for the product name
    const productName = $('<p class="product-name"></p>');
    productName.text(product.name);

    // Create a div for the product rating
    const productRating = $('<div class="product-rating"></div>');

    // Create a span element for the product rating value
    const productRatingValue = $('<span class="product-rating-value"></span>');
    const filledStars = Math.floor(Math.random() * 6);
    productRatingValue.text(filledStars);

    // Create filled stars
    for (let j = 0; j < filledStars; j++) {
      const star = $('<i>').addClass('fas fa-star');
      productRating.append(star);
    }

    // Calculate number of empty stars
    const emptyStars = 5 - filledStars;

    // Create empty stars
    for (let j = 0; j < emptyStars; j++) {
      const star = $('<i>').addClass('far fa-star');
      productRating.append(star);
    }

    // Create a span element for the maximum product rating
    const productRatingMax = $('<span class="product-rating-max"></span>');
    productRatingMax.text('/5');

    // Add the rating value and maximum to the rating div
    productRating.append(productRatingValue);
    productRating.append(productRatingMax);

    // Add the product name, price, and rating to the product details
    productDetails.append(productPrice);
    productDetails.append(productName);
    productDetails.append(productRating);

    // Add the product image and details to the product card
    productCard.append(productImage);
    productCard.append(productDetails);

    productLinkStart.append(productCard);

    // Add the product card to the product list
    productList.append(productLinkStart);
  }
});