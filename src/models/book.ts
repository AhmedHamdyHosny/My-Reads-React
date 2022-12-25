import { BookImageLink } from './BookImageLink';

export interface Book {
  id: string;
  shelf: string;
  title: string;
  authors: string[];
  imageLinks: BookImageLink;
}
