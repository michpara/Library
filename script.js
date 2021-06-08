let myLibrary = [];

function Book(title, author, numOfPages, read) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
  this.info = function() {
  	let ending;
  	if (read){
    	ending = "read.";
    } else{
    	ending = "not read yet.";
    }
  	return title + " by " + author + ", " + numOfPages + " pages, " + ending;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(){
	let div = document.getElementById("books");
	for(let i = 0; i < myLibrary.length; i++){
  	div.innerHTML += myLibrary[i].info() + "<br /> <br />";
  }
}

function resetBooks(){
	let div = document.getElementById("books");
  div.innerHTML = "";
}

function newBook(){
	var title = document.createElement("input");
  title.type = "text";
  title.placeholder = "Title";
  title.id = "title";

  var author = document.createElement("input");
  author.type = "text";
  author.placeholder = "Author";
  author.id = "author";

  var numOfPages = document.createElement("input");
  numOfPages.type = "number";
  numOfPages.placeholder = "# of pages";
  numOfPages.id = "numOfPages";

  //checkbox for read input

  //submit button
  
  let form = document.getElementById("form");
  form.appendChild(title);
  form.appendChild(author);
  form.appendChild(numOfPages);
}