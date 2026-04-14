//get the di elements
let form=document.getElementById("form-list");
let booklist=document.getElementById("book-list");

//book class
class Book{
    constructor(title,author,isbn){
       this.title=title;
       this.author=author;
       this.isbn=isbn;
    }
}

//UI class
class UI{
    //*************add books*********** */
    static addToBooklist(book){
        let list=document.getElementById("book-list")
        let row=document.createElement("tr")
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `
        ;
        list.appendChild(row);
        UI.storeBooksinLocalStorage(book);
    }
//**********clear fields*** */
static clearfields(){
    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("isbn").value="";
}
//**********show alert */
static showAlert(Message,className){
    let div=document.createElement("div");
    div.className=`alert ${className}`;
    div.innerText=Message;

    let container=document.querySelector(".container");
    container.insertBefore(div,form);

    setTimeout(() => {
    document.querySelector(".alert").remove();
    },3000);
}

//************delete******** */
 static deleteFromBook(target){
    if (target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        UI.showAlert("Book Removed","success");
        // UI.removeBook(target.parentElement.previousElementSibling.textContent.trim())
    }
    }
 static storeBooksinLocalStorage(book){
    let books=[]
    if(localStorage.getItem("books")=== null){
        books=[]
    }else{
        books=JSON.parse(localStorage.getItem("books"))
    }
    books.push(book);
    localStorage.setItem("books",JSON.stringify(books));
}
static removeBook(isbn){}

static displayBooksFromLocalStorage(){
    let books}
}
// Event listeners
   form.addEventListener("submit", newBooks)
   booklist.addEventListener("click", removeBook)
   document.addEventListener("DOMContentLoaded",getbooks)

//Defiine Function
function newBooks(e){
        e.preventDefault()
    let title=document.getElementById("title").value
    let author=document.getElementById("author").value
    let isbn=document.getElementById("isbn").value

    if(title === "" || author === "" || isbn === ""){
        UI.showAlert("Please Fill All The Fields" ,"error")
    }else{
        let book=new Book(title,author,isbn)
        UI.showAlert("New Book Added" , "success")
        UI.addToBooklist(book)
        UI.clearfields()
    }


    e.preventDefault()
}

function removeBook(e){
    UI.deleteFromBook(e.target);
    e.preventDefault();
}

function getbooks(e){
    let books
    if(localStorage.getItem("books") === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }
    console.log(books)
    if(books.length !=0){
        books.forEach(book => {
            let list = document.getElementById("book-list")
            let row = document.createElement("tr")

            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
            `
            
            list.appendChild(row)
         });
    }
}