import Library from './domain/library.js';

const libraryName = document.getElementById('library-name');
const inpTotalBooks = document.getElementById('inp-total-books');
const inpTotalWords = document.getElementById('inp-total-words');  //nuevo
const btnAdd = document.getElementById('btn-add');
const inpTitle = document.getElementById('inp-title');
const inpAuthor = document.getElementById('inp-author');
const inpPages = document.getElementById('inp-pages');
const inpWords = document.getElementById('inp-words'); //nuevo

const myLibrary = new Library('Papiros');
libraryName.innerHTML = myLibrary.getName();

function updateTotalBooks() {  //nuevo
  inpTotalBooks.value = myLibrary.totalBooks();
}

function updateTotalWords() {
  inpTotalWords.value = myLibrary.totalWords();
}

function updateInventory() {
  const emptyBookList = document.getElementById('empty-book-list');
  const bookListContainer = document.getElementById('book-list-container');
  const bookList = document.getElementById('book-list');

  emptyBookList.classList.add('d-none');
  bookListContainer.classList.remove('d-none');

  const addedBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
  let newListElement = document.createElement('li');
  newListElement.classList.add('list-group-item');
  newListElement.innerText = addedBook.toString();
  bookList.appendChild(newListElement);
}

btnAdd.addEventListener('click', () => {
  const bookErrorContainer = document.getElementById('add-book-error');
  const bookError = document.getElementById('add-book-error-msg');
  try {
    const newBook = myLibrary.addBook(inpTitle.value, inpAuthor.value, parseInt(inpPages.value));
    if (inpWords.value != '') { //nuevo 
      newBook.setWords(parseInt(inpWords.value));
    };
    clearInputs();
    bookErrorContainer.classList.add('d-none');
    updateInventory();
    updateTotalBooks();
    updateTotalWords();  //esto es nuevo 
  }
  catch (error) {
    bookErrorContainer.classList.remove('d-none');
    bookError.innerText = error;
  }
});

function clearInputs() {
  inpTitle.value = '';
  inpAuthor.value = '';
  inpPages.value = '';
  inpWords.value = '';
}

updateTotalBooks();
updateTotalWords();