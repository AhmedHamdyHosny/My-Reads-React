import { BookImageLink } from './bookImageLink';

export class Book {
  private id: string;
  private shelf: string;
  private title: string;
  private authors: string[];
  private imageLinks: BookImageLink;

  constructor(id, shelf, title, authors, imageLinks) {
    this.id = id;
    this.shelf = shelf;
    this.title = title;
    this.authors = authors;
    this.imageLinks = imageLinks;
  }
}
