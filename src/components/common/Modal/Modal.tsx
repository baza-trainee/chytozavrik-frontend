'use client';

import { MouseEvent, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CgClose } from 'react-icons/cg';
import { X } from 'lucide-react';
import styles from './Modal.module.scss';

type Props = {
  children?: ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: Props) => {
  const clickBackdropHandler = (evt: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (evt.currentTarget !== evt.target) return;

    onClose();
  };

  useEffect(() => {
    const keyDownHandler = (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('modal-open');
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.modal} onClick={clickBackdropHandler}>
      <div className={styles.content}>
        <button
          className={styles['close-button']}
          type="button"
          aria-label="modal close"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
