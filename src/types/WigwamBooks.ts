

export interface BookType {
  id: number,
  current_score: string | null,
  book: {
    id: number,
    title: string,
    author: string,
    cover_image: string
  },
}

export interface BooksResponse {
  data: BookType[];
  status: string;
}

export interface ErrorType {
  message: string;
}