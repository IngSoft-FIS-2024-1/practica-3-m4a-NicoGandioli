import Book from './book.js';

class Library {

  #name;
  #inventory = [];
  #totalWords;
  #wordCount;

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== 'string') {  //puse comilla simple en stirng y punto y coma en Error()
      throw new Error();
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error();  //agrege punto y coma
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages,words) {  //agrego words
    const newBook = new Book(title, author, pages,words); //agrego words
    newBook.setWords();
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    // FALTA HACER
  }
  
  wordCount(){
    //falta hacer 
  }
  
}

export default Library;
