"use strict";

var expandWidth = false;

var $ = function (id) {
  return document.getElementById(id);
};

var expandSearch = function () {
  if (expandWidth) {
    $("search-input").classList.add("expand");
    $("search-input").focus();
  } else {
    $("search-input").classList.remove("expand");
  }
  expandWidth = !expandWidth;
};

var showModal = function () {
  $("myaccount-modal").style.display = "flex";
};

var hideModal = function () {
  $("myaccount-modal").style.display = "none";
};


function hideBackground() {
  $("content-wrapper").style.filter = "brightness(0.5)";
}

function unhideBackground() {  
  $("content-wrapper").style.filter = "brightness(1.0)";
}

function setCatActiveCategory() {
  $("cat").classList.add("active-sub");
  $("dog").classList.remove("active-sub");
  $("bird").classList.remove("active-sub");

  $("food").src = "images/catfood.png";
  $("treat").src = "images/cattreat.png";
  $("supplies").src = "images/catsupplies.png";

  $("category-image").src = "images/catto.png";
}

function setDogActiveCategory() {
  $("cat").classList.remove("active-sub");
  $("dog").classList.add("active-sub");
  $("bird").classList.remove("active-sub");

  $("food").src = "images/dogfood.png";
  $("treat").src = "images/dogtreats.png";
  $("supplies").src = "images/dogsupplies.png";

  $("category-image").src = "images/doggo.png";

}

function setBirdActiveCategory() {
  $("cat").classList.remove("active-sub");
  $("dog").classList.remove("active-sub");
  $("bird").classList.add("active-sub");

  $("food").src = "images/birdfood.png";
  $("treat").src = "images/birdtreats.png";
  $("supplies").src = "images/birdsupplies.png";

  $("category-image").src = "images/birdo.png";

}

function userIconOnHover() {
  $("user-icon").style.filter = 'brightness(1.3)';
  $("content-wrapper").style.filter = "brightness(0.5)";
}

function userIconOnLeave() {
  $("user-icon").style.filter = 'brightness(1)';
  $("content-wrapper").style.filter = "brightness(1.0)";
}

function cartIconOnHover() {
  $("cart-icon").style.filter = 'brightness(1.5)';
}

function cartIconOnLeave() {
  $("cart-icon").style.filter = 'brightness(1)';
}

function loginBtnOnHover() {
  $("login-btn").style.filter = 'brightness(1.2)';
}

function loginBtnOnLeave() {
  $("login-btn").style.filter = 'brightness(1)';
}

function login(){
  var storedName = localStorage.getItem('name');
  var storedPw = localStorage.getItem('pw');

  var userName = document.getElementById('uname');
  var userPw = document.getElementById('pword');

  if (userName.value == storedName && userPw.value == storedPw){
      alert('You are logged in.');
  } else{
      alert('Error on login');
  }
}

window.onload = function () {
  expandSearch();

  $("myaccount").onmouseover = userIconOnHover;
  $("myaccount").onmouseleave = userIconOnLeave;
  $("myaccount-modal").onmouseover = userIconOnHover;
  $("myaccount-modal").onmouseleave = userIconOnLeave;

  $("cart-wrapper").onmouseover = cartIconOnHover;
  $("cart-wrapper").onmouseleave = cartIconOnLeave;

  $("login-btn").onmouseover = loginBtnOnHover;
  $("login-btn").onmouseleave = loginBtnOnLeave;

  $("cat").onmouseover = setCatActiveCategory;
  $("dog").onmouseover = setDogActiveCategory;
  $("bird").onmouseover = setBirdActiveCategory;

  $("search-input").onblur = expandSearch;
  $("search").onclick = expandSearch;
  $("products").onmouseover = hideBackground;
  $("products-modal").onmouseover = hideBackground;
  $("products").onmouseleave = unhideBackground;
  $("products-modal").onmouseleave = unhideBackground;
};
