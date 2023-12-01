import React, { Dispatch, Fragment, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import styles from '@/app/(wigwam)/components/Wigwam/Books/WigwamBooks.module.scss';
import { BookType } from '@/types/WigwamBooks';
import BookItem from '@/app/(wigwam)/components/Wigwam/Books/BookItem/BookItem';
import NotFoundBook from '@/app/(wigwam)/components/Wigwam/Books/NotFound/NotFoundBook';
import { useSession } from 'next-auth/react';
import axios from 'axios';

interface BooksListProps {
  booksData: BookType[],
  next: string | null,
  searchValue: string,
  selectedBooks: {[p: string]: boolean},
  setSelectedBooks: Dispatch<SetStateAction<{[p: string]: boolean}>>
}

const BooksList = ({ booksData, next, searchValue, selectedBooks, setSelectedBooks } : BooksListProps) => {
  const [filteredBooks, setFilteredBooks] = useState<BookType[]>(booksData);
  const [nextPageUrl, setNextPageUrl] = useState(next);
  const {data: session, status} = useSession()
  const observer = useRef<IntersectionObserver | null>(null);
  const [lastElement, setLastElement] = useState<HTMLElement | null>(null);


  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && nextPageUrl && status === 'authenticated') {
        loadMoreBooks();
      }
    });
    if (lastElement) observer.current.observe(lastElement);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [lastElement, nextPageUrl, status]);

  useEffect(() => {
    const matchedBooks = booksData?.filter((entry) =>
      entry.book.title.toLowerCase().includes(searchValue?.toLowerCase() || '') || entry.book.author.toLowerCase().includes(searchValue?.toLowerCase() || ''),
    );
    setFilteredBooks(matchedBooks);
  }, [searchValue, booksData]);

  const loadMoreBooks = async () => {
    if (!nextPageUrl) return;
      const response = await axios(nextPageUrl, {
        headers: {
          'Authorization': `Bearer ${session?.user?.token.access}`
        }
      });
      const newBooksData = response.data.data;
      setFilteredBooks(prevBooks => [...prevBooks, ...newBooksData.results],);
      setNextPageUrl(newBooksData.next);
  };

  return (
    <>
      {filteredBooks?.length > 1
        ? <div className={styles.button_list}>
          {filteredBooks?.map((item: BookType, index) => (
            <div key={item.id} ref={index === filteredBooks.length - 1 ? setLastElement : null}>
              <BookItem item={item} selectedBooks={selectedBooks} setSelectedBooks={setSelectedBooks} />
            </div>
          ))}
        </div>
        : <NotFoundBook />}
    </>
  );
};

export default BooksList;