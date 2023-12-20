'use client';

import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import Image from 'next/image';
import { Typography } from '@/components/common';
import styles from './UploadImage.module.scss';

interface UploadImageProps {
  onFileChange: (file: File | null) => void;
  file: File | null;
  maxSize?: number;
  allowedTypes?: string[];
}

const twoMB = 2 * 1024 * 1024;
const fileTypes = ['image/png', 'image/jpeg'];

const UploadImage: React.FC<UploadImageProps> = ({
  onFileChange,
  maxSize = twoMB,
  allowedTypes = fileTypes,
  file,
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

  const handleRemoveFile = () => {
    onFileChange(null);
  };

  return (
    <FileUploader
      classes={styles.imageInput}
      name="file"
      handleChange={handleChange}
      fileOrFiles={file}
    >
      {file ? (
        <div className={styles.uploadedImageContainer}>
          <Image
            className={styles.uploadedImage}
            src={URL.createObjectURL(file)}
            alt="Uploaded Image"
            width={120}
            height={175}
          />
          <button className={styles.closeButton} onClick={handleRemoveFile}>
            <Image src="/images/admin/x.svg" alt="close icon" height={16} width={16} />
          </button>
        </div>
      ) : (
        <div className={styles.uploadInfoContainer}>
          <Image src="/images/admin/Image-icon.svg" alt="image icon" width={51} height={43} />
          <Typography component="span" variant="body">
            Перетягніть свій файл сюди або
          </Typography>
          <Typography component="span" variant="body" className={styles.blueText}>
            натисніть щоб завантажити
          </Typography>

          {/* Showing error messages */}
          {(sizeErrorMessage || formatErrorMessage) && (
            <div className={styles.errorMessageContainer}>
              {sizeErrorMessage && (
                <Typography component="span" variant="body" className={styles.errorMessage}>
                  {sizeErrorMessage}
                </Typography>
              )}
              {formatErrorMessage && (
                <Typography component="span" variant="body" className={styles.errorMessage}>
                  {formatErrorMessage}
                </Typography>
              )}
            </div>
          )}

          {/* Displaying info upload reminder depending on the error message */}
          {(sizeErrorMessage && formatErrorMessage) ||
          (!sizeErrorMessage && !formatErrorMessage) ? (
            <div className={styles.formatAndSizeWarning}>
              <Typography component="span" variant="body">
                Формат зображення: JPG, PNG
              </Typography>
              <Typography component="span" variant="body">
                Максимальний розмір: 2 MB
              </Typography>
            </div>
          ) : null}
          {sizeErrorMessage && !formatErrorMessage && (
            <Typography component="span" variant="body">
              Максимальний розмір: 2 MB
            </Typography>
          )}
          {!sizeErrorMessage && formatErrorMessage && (
            <Typography component="span" variant="body">
              Формат зображення: JPG, PNG
            </Typography>
          )}
        </div>
      )}
    </FileUploader>
  );
};

export default UploadImage;
