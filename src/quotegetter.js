window.onload = function() {

  document.getElementById("quoteButton").onclick = function() {quotes()};

  let quotes = function quoteGetter() {
  	document.getElementById("quoteDiv").innerHTML = 'Here are some words';
  }

};