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

  window.onload = function () {
    expandSearch()
    $("search-input").onblur = expandSearch;
    $("search").onclick = expandSearch;
    // $("myaccount-wrapper").onmouseleave = hideModal;
  };