'use client';

import React, { useState } from 'react';
import { useQueryBooks } from '@/hooks/Books/useQueryBooks';
import { useDebouncedCallback } from 'use-debounce';
import SearchableSelect from '@/app/(admin)/components/SearchableSelect/SearchableSelect';
import { BookAdmin } from '@/types';
import { SingleValue } from 'react-select';

const Page = () => {
  const [selectedValue, setSelectedValue] = useState<SingleValue<string>>('');
  const [searchValue, setSearchValue] = useState<SingleValue<string>>('');

  const { books, booksLoading, fetchError } = useQueryBooks({
    currentPage: 1,
    page: 'books',
    searchValue,
    select: data => {
      console.log(data);
      return data.results.map((book: BookAdmin) => ({
        value: book.id,
        label: book.title,
        author: book.author,
      }));
    },
  });

  const clearInput = () => {
    setSearchValue('');
    setSelectedValue('');
  };

  const handleSelectChange = (selectedOption: SingleValue<string>) => {
    setSelectedValue(selectedOption);
  };

  const handleInputChange = (value: SingleValue<string>) => {
    setSearchValue(value);
  };

  const debouncedHandleInputChange = useDebouncedCallback(handleInputChange, 500);

  return (
    <div>
      <SearchableSelect
        options={books || []}
        onChange={handleSelectChange}
        clearInput={clearInput}
        onInputChange={debouncedHandleInputChange}
        selected={selectedValue}
        inputValue={searchValue}
        label="Назва книги"
      />
    </div>
  );
};

export default Page;
