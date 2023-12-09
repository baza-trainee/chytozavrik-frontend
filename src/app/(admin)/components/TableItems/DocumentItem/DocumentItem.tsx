'use client';

import React, { ChangeEvent, useRef, useState } from 'react';
import { File as FileIcon } from 'lucide-react';
import { Button } from 'components/common';
import { Document } from '@/types/Documents';
import { formattedDate } from '@/utils/formatDate';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import Modal from 'components/common/ModalActions/Modal';
import { useRouter } from 'next/navigation';
import { Route } from '@/constants';
import styles from './DocumentItem.module.scss';

const DocumentItem = ({ id, name, updated_at: updated }: Document) => {
  const queryClient = useQueryClient();
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDiscard, setIsDiscard] = useState(false);
  const { data: session } = useSession();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    mutate: submitDocument,
    error,
    isPending,
  } = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      if (file) {
        formData.append('file', file);
      }
      await axios.patch(`documents/${id}/`, formData, {
        headers: {
          Authorization: `Bearer ${session?.user.token.access}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      setIsSuccess(true);
    },
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFile(file);
    }
  };

  const openFileSelector = () => {
    fileInputRef.current?.click();
    setIsOpen(true);
  };

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.active : ''}`}>
      <div className={styles.document}>
        <div className={styles.info}>
          <div className={styles.icon}>
            <FileIcon />
          </div>
          <p className={styles.title}>{file ? file.name : name}</p>
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
          <Button variant="outline" onClick={() => setIsDiscard(true)} disabled={isPending}>
            Скасувати
          </Button>
          <Button
            type="submit"
            variant="filled"
            color="secondary"
            disabled={isPending}
            onClick={() => submitDocument()}
          >
            Оновити
          </Button>
        </div>
      )}
      {(isSuccess || isDiscard) && (
        <Modal
          type={isDiscard ? 'question' : 'success'}
          message={
            isDiscard
              ? 'Ви точно хочете залишити сторінку? Процес редагування буде втрачено'
              : 'Ваші зміни успішно збережено!'
          }
          title={isDiscard ? 'Залишити сторінку ' : 'Збережено!'}
          active={isDiscard || isSuccess}
          setActive={() => {
            setIsSuccess(false);
            setIsDiscard(false);
            setIsOpen(false);
          }}
          successFnc={() => route.push(Route.USERS)}
        />
      )}
      {error && <div style={{ color: '#F40000', fontSize: '16px' }}>Помилка: {error.message}</div>}
    </div>
  );
};

export default DocumentItem;
