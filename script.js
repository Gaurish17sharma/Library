const button = document.getElementById("addButton");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close");

button.onclick = function () {
  popup.style.display = "flex";
  overlay.style.display = "block";
};
closeButton.onclick = function () {
  popup.style.display = "none";
  overlay.style.display = "none";
};

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  
  function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
  }
  
  let myLibrary = [];
  
  const book = new Book(title, author, pages);
  myLibrary.push(book);

  const newBook = document.createElement("div");
  newBook.classList.add("book");
  
  const newTitle = document.createElement("div");
  newTitle.textContent = `"${book.title}"`;
  newBook.appendChild(newTitle);
  newTitle.classList.add("content");
  
  const newAuthor = document.createElement("div");
  newAuthor.textContent = book.author;
  newBook.appendChild(newAuthor);
  newAuthor.classList.add("content");
  
  const newPages = document.createElement("div");
  newPages.textContent = `${book.pages} pages`;
  newBook.appendChild(newPages);
  newPages.classList.add("content");
  
  const readButton = document.createElement("button");
  readButton.textContent = `Not Read`;
  readButton.classList.add("notRead");
  newBook.appendChild(readButton);

  readButton.addEventListener("click", () => {
    book.read = !book.read;
    if (book.read) {
      readButton.textContent = "Read";
      readButton.classList.add("read");
      readButton.classList.remove("notRead");
    } else {
      readButton.textContent = "Not Read";
      readButton.classList.add("notRead");
      readButton.classList.remove("Read");
    }
  });

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("removeButton");

  removeBtn.textContent = "Remove Book";
  newBook.appendChild(removeBtn);

  removeBtn.addEventListener('click', ()=>{
    newBook.remove();
  })

  //now adding the new book to the book div written in html
  const booksDiv = document.querySelector(".books");
  booksDiv.appendChild(newBook);

  // for removing popup and overlay after pressing submit
  popup.style.display = "none";
  overlay.style.display = "none";

  // for removing the previous values added
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";

})