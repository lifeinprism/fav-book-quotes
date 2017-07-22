window.onload = function() {

  document.getElementById("quoteButton").onclick = function() {quotes()};
 
  //creates and formats a string with the book's quote, title and author
  let bookAuthorTitle = (object, index) => {
    return '<div id="quoteSpace">' + object.quote + '</div><hr><br><div id="authorSpace">' + object.author + '<br>' + object.title + '</div>';
  }

  //onclick, randomly choose book and outputs to quoteDiv
  let quotes = () => { 
  	let randBook = Math.floor(Math.random() * quotesAndAuthor.length);
  	document.getElementById("quoteDiv").innerHTML = quotesAndAuthor.map(bookAuthorTitle)[randBook];
  }

  //automatically displays a random quote onload
  quotes();
  
};