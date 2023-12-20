'use client';

import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import FileInput from '@/app/(admin)/components/UploadImageComponent/components/FileInput';
import EmptyInput from '@/app/(admin)/components/UploadImageComponent/components/EmptyInput';
import styles from './UploadImage.module.scss';

interface UploadImageProps {
  onFileChange: (file: File | null) => void;
  file: File | null;
  maxSize?: number;
  allowedTypes?: string[];
  initialImg: string;
}

const twoMB = 2 * 1024 * 1024;
const fileTypes = ['image/png', 'image/jpeg'];

const UploadImage: React.FC<UploadImageProps> = ({
  onFileChange,
  maxSize = twoMB,
  allowedTypes = fileTypes,
  file,
  initialImg,
}) => {
  const [sizeErrorMessage, setSizeErrorMessage] = useState<string>('');
  const [formatErrorMessage, setFormatErrorMessage] = useState<string>('');

  const validateSizeError = (file: File) => {
    const isTooBig = file.size > maxSize;

    if (isTooBig) {
      setSizeErrorMessage(
        `${file.name} перевищує максимальний ліміт розміру файлу для цього сайту.`
      );
      return false;
    }

    return true;
  };

  const validateFormatError = (file: File) => {
    const isCorrectFormat = allowedTypes.includes(file.type);

    if (!isCorrectFormat) {
      setFormatErrorMessage(`${file.name} не відповідний формат завантаженого файлу.`);
      return false;
    }

    return true;
  };

  const validateImage = (file: File) => {
    const isValidSize = validateSizeError(file);
    const isValidFormat = validateFormatError(file);

    return isValidFormat && isValidSize;
  };

  const handleChange = (file: File) => {
    setSizeErrorMessage('');
    setFormatErrorMessage('');

    if (validateImage(file)) {
      onFileChange(file);
    }
  };

  return (
    <FileUploader
      classes={styles.imageInput}
      name="file"
      handleChange={handleChange}
      fileOrFiles={file}
    >
      {file || initialImg ? (
        <FileInput initialImg={initialImg} file={file} onFileChange={onFileChange} />
      ) : (
        <EmptyInput sizeErrorMessage={sizeErrorMessage} formatErrorMessage={formatErrorMessage} />
      )}
    </FileUploader>
  );
};

export default UploadImage;
