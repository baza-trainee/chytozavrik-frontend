'use client';

import React, { ChangeEvent, useRef, useState } from 'react';
import { File } from 'lucide-react';
import { Button } from 'components/common';
import { Document } from '@/types/Documents';
import { formattedDate } from '@/utils/formatDate';
import styles from './DocumentItem.module.scss';

const DocumentItem = ({ id, name, file, updated_at: updated }: Document) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fileName, setFileName] = useState(name);
  const fileInputRef = useRef<HTMLInputElement>(null);
  console.log(fileName);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFileName(file.name);
    }
  };

  const openFileSelector = () => {
    fileInputRef.current?.click();
    setIsOpen(true);
  };

  const cancelHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.active : ''}`}>
      <div className={styles.document}>
        <div className={styles.info}>
          <div className={styles.icon}>
            <File />
          </div>
          <p className={styles.title}>{fileName}</p>
        </div>
        <div className={styles.date}>{formattedDate(updated)}</div>
        <Button variant="outline" onClick={openFileSelector} disabled={isOpen}>
          Замінити файл
        </Button>
        <input
          type="file"
          accept="application/pdf"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      {isOpen && (
        <div className={styles.buttons}>
          <Button variant="outline" onClick={cancelHandler}>
            Скасувати
          </Button>
          <Button type="submit" variant="filled" color="secondary">
            Оновити
          </Button>
        </div>
      )}
    </div>
  );
};

export default DocumentItem;
