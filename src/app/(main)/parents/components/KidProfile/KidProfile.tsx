import { useState } from 'react';
import Link from 'next/link';
import { Typography} from '@/components/common';
import { Route } from '@/constants';
import Image from 'next/image';
import styles from './KidProfile.module.scss';
import { ChildType } from '@/types';
import EditWigwam from '../EditWigwam';


type Props = {
  handleDelete: (id: number) => void;
  kid: ChildType;
};


const KidProfile = ({ kid, handleDelete }: Props) => {

  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    if (!edit) setEdit(true);
    else setEdit(false);
  };

  return (
    <>
      <li key={kid.id} className={styles.item}>
        <Link className={styles.link} href={`${Route.WIGWAM}/${kid.id}`} data-avatar>
          <div className={styles.thumb}>
            <Image src={kid.avatar_as_url} width={80} height={80} alt={kid.name}/>
          </div>
          <Typography component='p' variant='body' className={styles.name}>
            {kid.name}
          </Typography>
        </Link>
        <div className={styles.books}>
          <Typography className={styles.title} component='p' variant='h5'>Прочитано</Typography>
          <div className={styles.wrapper}>
            <Typography className={styles.quantity} component='p' variant='h3'>0</Typography>
            <p className={styles.text}>книг</p>
          </div>
        </div>
        <div className={styles.booksQuizzes}>
          <Typography className={styles.title} component='p' variant='h5'>Вікторин пройдено</Typography>
          <div className={styles.quizzes}>
            <div className={styles.wrapper}>
              <p className={styles.quantity}>0</p>
              <p className={styles.text}>Загалом</p>
            </div>
            <div className={styles.wrapper}>
              <p className={styles.quantity}>0</p>
              <p className={styles.text}>Сьогодні</p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <div onClick={() => {
            handleEdit();
          }}>
            <Image src='/images/edit.svg' alt='кнопка редагування' width={36} height={36}/>
          </div>
          <div className={styles.button} onClick={() => {
            handleDelete(kid.id);
          }}>
            <Image src='/images/delete.svg' alt='кнопка видалення' width={36} height={36}/>
          </div>
        </div>
      </li>
      {edit && <EditWigwam closeEditWigwam={handleEdit}
                           id={kid.id}
      />}
    </>
  );
};

export default KidProfile;
