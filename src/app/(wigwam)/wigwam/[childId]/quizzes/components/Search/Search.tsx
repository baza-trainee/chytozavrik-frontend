'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import { Input } from '@/components/common/form';
import { Search as SearchIcon } from 'lucide-react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import styles from './Search.module.scss';

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const initialSearchValue = searchParams.get('search')?.toString();
  const { control, setValue, watch } = useForm({
    defaultValues: {
      search: initialSearchValue,
    },
  });
  const searchTerm = watch('search');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedSearchTerm) {
      params.set('search', debouncedSearchTerm);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  }, [debouncedSearchTerm, pathname]);

  const resetField = () => setValue('search', '');

  return (
    <div className={styles.inputContainer}>
      <Input
        className={styles.customInput}
        name="search"
        control={control}
        icon={<SearchIcon />}
        resetField={resetField}
        placeholder="Search for quizzes"
      />
    </div>
  );
};

export default Search;
