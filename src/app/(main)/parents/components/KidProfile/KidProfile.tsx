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


const KidProfile = ({kid, handleDelete}: {kid: ChildType, handleDelete: (id:number) => void }) => {

    
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
          {edit && <EditWigwam closeEditWigwam={handleEdit} />}
          </> 
  )
}

export default KidProfile
