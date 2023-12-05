export interface BookType {
  id: number;
  current_score: string | null;
  book: {
    id: number;
    title: string;
    author: string;
    cover_image: string;
  };
}

export interface BooksResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: BookType[];
}

export interface BooksResults {
  results: BookType[];
}

export interface ErrorType {
  message: string;
}
