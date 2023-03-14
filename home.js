let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  console.log("show slides");
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log("slides " + slides[0]);

  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function enlargeCatAnimation() {
  $("cat-image").style.width = "110%";
}

function reduceCatAnimation() {
  $("cat-image").style.width = "100%";
}

function enlargeDogAnimation() {
  $("dog-image").style.width = "110%";
}

function reduceDogAnimation() {
  $("dog-image").style.width = "100%";
}

function enlargeBirdAnimation() {
  $("bird-image").style.width = "110%";
}

function reduceBirdAnimation() {
  $("bird-image").style.width = "100%";
}

("use strict");

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
  $("user-icon").style.filter = "brightness(1.3)";
  $("content-wrapper").style.filter = "brightness(0.5)";
}

function userIconOnLeave() {
  $("user-icon").style.filter = "brightness(1)";
  $("content-wrapper").style.filter = "brightness(1.0)";
}

function cartIconOnHover() {
  $("cart-icon").style.filter = "brightness(1.5)";
}

function cartIconOnLeave() {
  $("cart-icon").style.filter = "brightness(1)";
}

function login() {
  var storedName = localStorage.getItem("name");
  var storedPw = localStorage.getItem("pw");

  var userName = document.getElementById("uname");
  var userPw = document.getElementById("pword");

  if (userName.value == storedName && userPw.value == storedPw) {
    alert("You are logged in.");
  } else {
    alert("Error on login");
  }
}

window.onload = function () {
  showSlides();
  setInterval(function () {
    plusSlides(1);
  }, 2000);  

  $("cat-image").onmouseover = enlargeCatAnimation;
  $("cat-image").onmouseleave = reduceCatAnimation;
  $("dog-image").onmouseover = enlargeDogAnimation;
  $("dog-image").onmouseleave = reduceDogAnimation;
  $("bird-image").onmouseover = enlargeBirdAnimation;
  $("bird-image").onmouseleave = reduceBirdAnimation;

  expandSearch();

  $("myaccount").onmouseover = userIconOnHover;
  $("myaccount").onmouseleave = userIconOnLeave;
  $("myaccount-modal").onmouseover = userIconOnHover;
  $("myaccount-modal").onmouseleave = userIconOnLeave;

  $("cart-wrapper").onmouseover = cartIconOnHover;
  $("cart-wrapper").onmouseleave = cartIconOnLeave;

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
