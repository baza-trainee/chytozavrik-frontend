'use client';
import { useEffect, useState } from 'react';
import { useFetch } from '@/hooks';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Container, Typography, Button } from 'components/common';
import { Route } from '@/constants';
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6 } from '../lobby/components/Avatar';
import Edit from '../../../../../public/images/edit.svg';
import Delete from '../../../../../public/images/delete.svg';
import Image from 'next/image';
import styles from './KidSection.module.scss';
const Avatars = [
  undefined,
  <Avatar1 key="avatar1" />,
  <Avatar2 key="avatar2" />,
  <Avatar3 key="avatar3" />,
  <Avatar4 key="avatar4" />,
  <Avatar5 key="avatar5" />,
  <Avatar6 key="avatar6" />,
];

export default function KidSection() {
  const [kids, setKids] = useState([]);
  const { status } = useSession();
  const { fetch } = useFetch();

  useEffect(() => {
    const getKidProfile = async () => {
      const response = await fetch('users/me/children/');
      const kids = await response?.data as [];
      setKids(kids);
    };
    if (status === 'authenticated') getKidProfile();
  }, [status]);

  const editProfile = () => {
    console.log('edit');
  }
  const deleteProfile = () => {
    console.log('delete');
  }

  return (
    <section>
      <h2>Вігвами дітей</h2>
      {kids.length > 0 ? ( 
        <ul className={styles.list}>
          {kids.map(({ id, name, avatar }) => (
            <li key={id} className={styles.item}>
            <Link className={styles.link} href={`${Route.WIGWAM}/${id}`} data-avatar>
            <div className={styles.thumb}>{Avatars.at(avatar)}</div>
            <Typography component="p" variant="h2">
              {name}
            </Typography>
          </Link>
          <div className={styles.books}>
            <p>Прочитано</p>
            <p>0</p>
            <p>книг</p>
            </div>
          <div className={styles.quizes}>
            <p>Вікторин пройдено</p>
            <div>
              <div>
                <p>0</p>
                <p>Загалом</p>
              </div>
              <div>
                <p>0</p>
                <p>Сьогодні</p>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button className={styles.button} onClick={editProfile}>
            <Image src={Edit} alt='кнопка редагування'></Image>
            </Button>
            <Button className={styles.button} onClick={deleteProfile}>
            <Image src={Delete} alt='кнопка видалення'></Image>
            </Button>
          </div>
          </li>
          ))}
        </ul>
       ) : (
        <p>У вас поки немає створеного вігваму</p>
      )} 
    </section>
  );
}
