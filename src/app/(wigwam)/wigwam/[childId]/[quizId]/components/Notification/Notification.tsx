'use client';

import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
import { Container } from '@/components/common';
import styles from './Notification.module.scss';

type Props = {
  type?: 'success' | 'error' | 'default';
  backdrop?: boolean;
  children: ReactNode;
};

const Notification = ({ type = 'default', backdrop = false, children }: Props) => {
  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return createPortal(
    <FocusTrap focusTrapOptions={{ initialFocus: false }}>
      <div className={styles.backdrop} datatype={type} data-backdrop={backdrop}>
        <div className={styles.content}>
          <Container>{children}</Container>
        </div>
      </div>
    </FocusTrap>,
    document.body
  ) as ReactNode;
};

export default Notification;
