import {useState} from 'react';
import Link from 'next/link';
import { Typography, Button } from '@/components/common';
import { Route } from '@/constants';
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6 } from '../../lobby/components/Avatar';
import Edit from '../../../../../../public/images/edit.svg';
import Delete from '../../../../../../public/images/delete.svg';
import Image from 'next/image';
import styles from './KidProfile.module.scss';
import {ChildType} from '@/types';
import EditWigwam from '../EditWigwam';

// type Props = {
//     handleEdit: () => void;
//     handleDelete: () => void;
//      ChildType: {
//         id: number;
//         name: string;
//         avatar: number;
//       };
//   };
  
  const Avatars = [
    undefined,
    <Avatar1 key="avatar1" />,
    <Avatar2 key="avatar2" />,
    <Avatar3 key="avatar3" />,
    <Avatar4 key="avatar4" />,
    <Avatar5 key="avatar5" />,
    <Avatar6 key="avatar6" />,
  ];


  type Props = {
    handleDelete: (id: number) => void;
    kid: ChildType;
  };


const KidProfile = ({kid, handleDelete }: Props) => {

    
    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
        if (!edit) setEdit(true);
        else setEdit(false);
      };


  return (
      <>
    <li key={kid.id} className={styles.item}>
            <Link className={styles.link} href={`${Route.WIGWAM}/${kid.id}`} data-avatar>
            <div className={styles.thumb}>{Avatars.at(kid.avatar)}</div>
            <Typography component="p" variant="h2">
              {kid.name}
            </Typography>
          </Link>
          <div className={styles.books}>
            <Typography className={styles.title} component='p' variant='h5'>Прочитано</Typography>
            <div className={styles.wrapper}>
              <Typography className={styles.quantity} component='p'variant='h3'>0</Typography>
              <p className={styles.text}>книг</p>
            </div>
          </div>
          <div className={styles.quizes}>
            <Typography className={styles.title} component='p' variant='h5'>Вікторин пройдено</Typography>
            <div>
              <div className={styles.wrapper}>
              <Typography className={styles.quantity} component='p'variant='h3'>0</Typography>
              <p className={styles.text}>Загалом</p>
              </div>
              <div className={styles.wrapper}>
                <p className={styles.quantity}>0</p>
                <p className={styles.text}>Сьогодні</p>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button className={styles.button} onClick={() => {
            handleEdit();
          }}>
            <Image src={Edit} alt='кнопка редагування'></Image>
            </Button>
            <Button className={styles.button} onClick={() => {
            handleDelete(kid.id);
          }}>
            <Image src={Delete} alt='кнопка видалення'></Image>
            </Button>
          </div>
          </li>
          {edit && <EditWigwam closeEditWigwam={handleEdit}
          id={kid.id}
          />}
          </> 
  )
}

export default KidProfile
