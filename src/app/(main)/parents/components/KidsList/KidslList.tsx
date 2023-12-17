'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ChildType } from '@/types';
import { Container, Typography, Spinner } from '@/components/common';
import KidProfile from '../KidProfile';
import styles from './KidList.module.scss';
import NoteKid from '../NoteKid';

const KidslList = () => {
  const [showNote, setShowNote] = useState(true);
  // const [firstChild, setFirstChild] = useState('');
  const closeNote = () => {
    setShowNote(false);
    // localStorage.setItem('item', '');
  };

  //   useEffect(() => {
  //   const item = localStorage.getItem('item');
  //   setFirstChild('item');
  // }, [])

  const { data: session, status } = useSession();
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || '';

  const { data: kids, isLoading } = useQuery({
    queryKey: ['kids'],
    enabled: status === 'authenticated',
    queryFn: async () => {
      const response = await axios(`${baseUrl}/users/me/children/`, {
        headers: {
          Authorization: `Bearer ${session?.user.token.access}`,
        },
      });
      return response.data.data;
    },
  });

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.section}>
      <Container className={styles.container}>
        <Typography className={styles.title} component="h2" variant="h2">
          Вігвами дітей
        </Typography>
        {kids ? (
          <>
            <ul className={styles.list}>
              {kids.map((kid: ChildType) => (
                <KidProfile key={kid.id} kid={kid} />
              ))}
            </ul>
            {showNote && <NoteKid closeNote={closeNote} />}
          </>
        ) : (
          <p className={styles.text}>У вас поки немає створеного вігваму</p>
        )}
      </Container>
    </div>
  );
};

export default KidslList;
