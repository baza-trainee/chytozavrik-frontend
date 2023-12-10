'use client';

import React, { ChangeEvent, useRef, useState } from 'react';
import { AlertCircle, File as FileIcon } from 'lucide-react';
import { Button } from 'components/common';
import { Contact } from '@/types/Contacts';
import { formattedDate } from '@/utils/formatDate';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import Modal from 'components/common/ModalActions/Modal';
import styles from './ContactItem.module.scss';

const ContactItem = ({ id, name,number, updated_at: updated }: Contact) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);


  const [isSuccess, setIsSuccess] = useState(false);
  const [isDiscard, setIsDiscard] = useState(false);
  const { data: session } = useSession();


  const {
    mutate: submitDocument,
    error,
    isPending,
  } = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      
      await axios.patch(`contacts/${id}/`, formData, {
        headers: {
          Authorization: `Bearer ${session?.user.token.access}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      setIsSuccess(true);
    },
  });
  
  
  

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.active : ''}`}>
      <div className={styles.document}>
        <div>
          <div className={styles.info}>
            <div className={styles.icon}>
              <FileIcon />
            </div>
            <p className={styles.title}>{file ? file.name : name}</p>
          </div>
          {errorFile && (
            <div className={styles.error}>
              <div>
                <AlertCircle color="#F40000" size={14} />
              </div>
              {errorFile}
            </div>
          )}
        </div>
        <div className={styles.date}>{formattedDate(updated)}</div>
        <Button variant="outline" onClick={openFileSelector} disabled={isOpen && !errorFile}>
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
            disabled={isPending || !!errorFile}
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
          successFnc={() => {
            setIsOpen(false);
            setFile(null);
            setErrorFile('');
          }}
        />
      )}
      {error && <div style={{ color: '#F40000', fontSize: '16px' }}>Помилка: {error.message}</div>}
    </div>
  );
};

export default ContactItem;