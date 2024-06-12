class Book {

  #title;
  #author;
  #pages;
  #words;
  
  constructor(title, author, pages) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {      //echo en clase
   return this.#words;
  }

  setTitle(title) {
    if (typeof (title) !== 'string') {
      throw new Error();
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error();
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof (author) !== 'string') {
      throw new Error(); //agrego punto y coma
    }
    author = author.trim();
    if (author.length === 0) {
      author = 'Anónimo'; //comillas simples en ves de ""
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof (pages) !== 'number' || isNaN(pages)) {
      throw new Error(); //punto y coma
    }
    if (pages < 1) {
      throw new Error(); //punto y coma
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setWords(words) {       //ejercicio todo echo en clase
    if (typeof (words) !== 'number' || isNaN(words)) {
      throw new Error(); //copie el codigo de if de setPages que te ayuda a verificar si es un string o no
    }
    this.#words =words;
  }

  wordsPerPage() {
    // TODO
  }

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages}`;
  }
}

export default Book;
