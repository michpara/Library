let myLibrary = [];
let buttons; //will continuously store all remove buttons on page
let checkboxes; //will continuously store all status checkboxes on page

//book object
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

//change the read status of a book
Book.prototype.setReadStatus = function(status) {
  this.read = status;
}

//add a book to the library
function addBookToLibrary(book) {
  myLibrary.push(book);
}

//display books in the library
function displayBooks(){
	let div = document.getElementById("books");

  //display books
	for(let i = 0; i < myLibrary.length; i++){
  	div.innerHTML += (i+1) + ". " + myLibrary[i].info() + " "; //display the book info
    
    //create the status checkbox for this book
    var status = document.createElement('input');
    status.type = "checkbox";
    status.className = "read";
    status.value = i; //link status checkbox to specific book (stored at this index in the library)
    status.defaultChecked = myLibrary[i].read;
    
    //create the remove button for this book
    var remove = document.createElement("button");
    remove.innerHTML = "Remove";
    remove.className = "remove";
    remove.value = i; //link remove button to specific book (stored at this index in the library)
    remove.type = "button";

    div.appendChild(status)
    div.appendChild(remove);
    div.innerHTML += "<br /> <br />";
  }

  //create onclick event for all buttons (this is called here since displayBooks() is called everytime we add a new book (+ remove button))
  buttons = document.getElementsByClassName("remove");
  
  //on remove button click, remove that book from library
  for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(){
      let index = this.value;
      for(let i = 0; i < myLibrary.length; i++){ 
          if (i.toString() === index) { 
            myLibrary.splice(i, 1); 
          }
      }
      //reset library display and book order
      resetBooks();
      displayBooks();
    }
  }

  //create onclick event for all checkboxes (this is called here for the same reason as above)
  checkboxes = document.getElementsByClassName("read");

  //on checkbox click, change status on
  for(let i = 0; i < checkboxes.length; i++){
    checkboxes[i].onclick = function(){
      myLibrary[i].setReadStatus(checkboxes[i].checked);

      //reset library display and book order
      resetBooks();
      displayBooks();
    }
  }
}

//reset books display
function resetBooks(){
	let div = document.getElementById("books");
  div.innerHTML = "";
}

//create new book
function newBook(){
  document.getElementById("newBook").disabled = true; //disable new book button

	let title = document.createElement("input");
  title.type = "text";
  title.placeholder = "Title";
  title.id = "title";

  let author = document.createElement("input");
  author.type = "text";
  author.placeholder = "Author";
  author.id = "author";

  let numOfPages = document.createElement("input");
  numOfPages.type = "number";
  numOfPages.placeholder = "# of pages";
  numOfPages.id = "numOfPages";

  let read = document.createElement('input');
  read.type = "checkbox";
  read.name = "read";
  read.id = "read";
   
  let label = document.createElement('label');
  label.htmlFor = "read";
  label.appendChild(document.createTextNode('Have you read this book?: '));

  let submit = document.createElement("button");
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
    resetBooks();
    displayBooks();
    form.reset();
  }
}