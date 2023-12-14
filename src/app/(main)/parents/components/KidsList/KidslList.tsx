'use client';

import { useState, useEffect } from 'react';
import { useFetch } from '@/hooks';
import { useSession } from 'next-auth/react';
import { ChildType } from '@/types';
import { Container, Typography } from '@/components/common';
import KidProfile from '../KidProfile';
import styles from './KidList.module.scss';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

import NoteKid from '../NoteKid';


// const KidslList = () => {
//   const [kids, setKids] = useState([]);
//   const { status } = useSession();
//   const { fetch } = useFetch();

//   useEffect(() => {
//     const getKidProfile = async () => {
//       const response = await fetch('users/me/children/');
//       const kids = (await response?.data) as [];
//       setKids(kids);
//     };
//     if (status === 'authenticated') getKidProfile();
//   }, [status]);

//   const handleDelete = async (id: number) => {
//     const validKids = kids.filter((kid: ChildType) => kid.id !== id);
//     setKids(validKids);
//     try {
//       await fetch(`users/me/children/${id}/`, 'DELETE');
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className={styles.section}>
//       <Container className={styles.container}>
//         <Typography className={styles.title} component="h2" variant="h2">
//           Вігвами дітей
//         </Typography>
//         {kids.length > 0 ? (
//           <ul className={styles.list}>
//             {kids.map((kid: ChildType) => (
//               <KidProfile key={kid.id} kid={kid} handleDelete={handleDelete} />
//             ))}
//           </ul>
//         ) : (
//           <p className={styles.text}>У вас поки немає створеного вігваму</p>
//         )}
//       </Container>
//     </div>
//   );
// };

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

  const {data: kids} = useQuery({
    queryKey: ["kids"],
    enabled: status === 'authenticated',
    queryFn: async () => {
      const response = await axios(`${baseUrl}/users/me/children/`, {
        headers: {
          'Authorization': `Bearer ${session?.user.token.access}`
        }
      });
      return response.data.data;
    }
  })

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
              <KidProfile key={kid.id} kid={kid}/>
            ))}
          </ul>
          {/* { firstChild
           &&  */
           showNote &&
          <NoteKid closeNote={closeNote}/> 
}
          </>
        ) : (
          <p className={styles.text}>У вас поки немає створеного вігваму</p>
        )}
        
      </Container>
    </div>
  );
};


export default KidslList;
