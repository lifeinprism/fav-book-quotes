window.onload = function() {

  document.getElementById("quoteButton").onclick = function() {quotes()};
 
  let bookAuthorTitle = function (object, index) {
    return object.quote + '<br>' + 'from:' + object.title + '<br>' + 'by: ' + object.author;
  }

  let quotes = function quoteGetter() { 
  	let randBook = Math.floor(Math.random() * quotesAndAuthor.length);
  	console.log(randBook);
  	document.getElementById("quoteDiv").innerHTML = quotesAndAuthor.map(bookAuthorTitle)[randBook];
 
  }
  
};



//  used to print the book quote to the screen
// 	document.getElementById("quoteDiv").innerHTML = quotesAndAuthor[randomBook].quote;