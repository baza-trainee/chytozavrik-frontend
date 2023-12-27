import React from 'react';
import { Typography } from 'components/common';
import SearchableSelect, {
  SearchableSelectProps as QuizBookInputProps,
} from '@/app/(admin)/components/SearchableSelect/SearchableSelect';
import styles from '@/app/(admin)/admin/quizzes/components/QuizzesForm/QuizForm.module.scss';

const QuizBookInput: React.FC<QuizBookInputProps> = ({
  onChange,
  onInputChange,
  clearInput,
  options,
  selected,
  inputValue,
  label,
}) => (
  <div className={styles.book}>
    <Typography component="h2" variant="h5">
      Книга
    </Typography>
    <SearchableSelect
      options={options}
      onChange={onChange}
      clearInput={clearInput}
      onInputChange={onInputChange}
      selected={selected}
      inputValue={inputValue}
      label={label}
    />
  </div>
);

export default QuizBookInput;
