'use client';

import React, { useState } from 'react';
import { Container, Button, Typography } from 'components/common';
import Image from 'next/image';
import avatar from 'public/images/avatar-parents.svg';
import wigwam from 'public/images/wigwam.svg';
import Notification from 'components/Notification/Notification';
import styles from './Parents.module.scss';

type Props = {
  handleClick: () => void;
};

const Parents = ({ handleClick }: Props) => {
  const [showNote, setShowNote] = useState(true);
  const closeNote = () => {
    setShowNote(false);
  };

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Image src={avatar} className={styles.image} alt="аватарка батьків" width="106" />
        <Button
          color="secondary"
          className={styles.button}
          onClick={() => {
            handleClick();
            closeNote();
          }}
        >
          <Image src={wigwam} width="24" alt="іконка вігваму" />
          <Typography className={styles.text} component="span" variant="h5">
            Створити вігвам
          </Typography>
        </Button>
        {showNote && <Notification closeNote={closeNote} />}
      </Container>
    </section>
  );
};

export default Parents;
