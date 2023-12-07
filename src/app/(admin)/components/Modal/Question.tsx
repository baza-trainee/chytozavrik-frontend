import React from 'react';

import styles from './Modal.module.scss'
import { Button } from 'components/common';

interface QuestionProps {
  message: string,
  title: string,
  closeModal: () => void;
  successFnc: (() => void) | undefined;
}

const Question = ({title, message, closeModal, successFnc} : QuestionProps) => {
  return (
    <div className={styles.question}>
      <div className={styles.content}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttons}>
          <Button variant='outline'  onClick={() => closeModal()}>
            Скасувати
          </Button>
          <Button variant='filled' color='secondary'
            onClick={() => {
              closeModal();
              if (successFnc) successFnc();
            }}
          >
            Підтвердити
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;