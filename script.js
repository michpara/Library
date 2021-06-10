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
  	div.innerHTML += (i+1) + ". " + myLibrary[i].info() + "<br /> <br />";
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

  var read = document.createElement('input');
  read.type = "checkbox";
  read.name = "read";
  read.id = "read";
   
  var label = document.createElement('label');
  label.htmlFor = "read";
  label.appendChild(document.createTextNode('Have you read this book?: '));

  var submit = document.createElement("button");
  submit.innerHTML = "Submit";
  submit.id = "submit";
  submit.type = "button";

  let form = document.getElementById("form");
  form.appendChild(title);
  form.appendChild(author);
  form.appendChild(numOfPages);
  form.innerHTML += "<br />";
  form.appendChild(label);
  form.appendChild(read);
  form.innerHTML += "<br />";
  form.appendChild(submit);

  document.getElementById('submit').onclick = function(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let numOfPages = document.getElementById("numOfPages").value;
    let read = document.getElementById("read").checked;
    let book = new Book(title, author, numOfPages, read);
    addBookToLibrary(book);
    form.reset();
  }
}