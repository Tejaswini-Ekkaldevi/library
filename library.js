/*let user_input =prompt("Enter the number of books to be added :");
//User input
if(user_input!==NaN){

    document.write("User Input :"+user_input+"</br>");
    }
else{
    document.write("Invalid Input.</br>");

}*/

let myLibrary = [];
const list = document.querySelector("#bookList")

const bookTitle = document.querySelector('#inputTitle')
const bookAuthor = document.querySelector('#inputAuthor')
const bookPages = document.querySelector('#inputPages')
const bookRead = document.querySelector('select')
const btn1 = document.getElementById('btn');

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    
    if (bookTitle.value && bookAuthor.value && bookPages.value && bookRead.value) {
        myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value))
      } else {
        alert("Please enter all information")
      }
     // console.log(myLibrary,bookTitle);
  }

  function displayBooks(book){

     const row = document.createElement('tr')
    const createTitle = document.createElement('td')
    const createAuthor = document.createElement('td')
    const createPages = document.createElement('td')
    const createStatus = document.createElement('td')


    createTitle.innerHTML = book.title
    createAuthor.innerHTML = book.author
    createPages.innerHTML = book.pages
    createStatus.innerHTML = book.read

    row.appendChild(createTitle)
    row.appendChild(createAuthor)
    row.appendChild(createPages)
    row.appendChild(createStatus)
    list.appendChild(row);

   console.log("Title : "+book.title+ ", Author : "+book.author+ ", Pages : " +book.pages+", Read Status : " +book.read);
  }

  btn1.addEventListener('click' , () =>{
    console.log(myLibrary)
    addBookToLibrary();
   // for(let i=0;i<myLibrary.length;i++){
    displayBooks(myLibrary[myLibrary.length-1]);
    //}

  })