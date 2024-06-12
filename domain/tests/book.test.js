import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => myBook = new Book('Titulo',null, 350)).toThrow(); //echo en clase
  });

  it('check page param is a number', () => {
    expect(() => new Book('Titulo','Autor','string')).toThrow();    //echo en clase
  });

  it('check pages not < 1', () => {
    expect(() => new Book('Titulo','Autor',0)).toThrow(); 
  });

  it('toString()', () => {
    // TODO
  });

  it('check words param is a number', () => {
    let aBook = new Book('Titulo','Autor',100);
    expect(() => aBook.setWords('string')).toThrow();    //echo en clase, ejemplo de set words
  });

  it('getWords returns the word count', () => {
    let aBook = new Book('Titulo','Autor',100);
    aBook.setWords(3000);
    expect(() => aBook.getWords()).toBe(3000);    //echo en clase, ejemplo de Get words
  });

});
