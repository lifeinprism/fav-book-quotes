window.onload = function() {

  document.getElementById("quoteButton").onclick = function() {quotes()};

  let quotes = function quoteGetter() {
  	let randomBook = Math.floor(Math.random() * quotesAndAuthor.length);
  	document.getElementById("quoteDiv").innerHTML = quotesAndAuthor[randomBook].quote;

  	console.log(randomBook)
  }
};