import  { useState, useEffect } from 'react';
import { useFetch } from '@/hooks';
import { useSession } from 'next-auth/react';
import KidProfile from '../KidProfile';
import { ChildType } from '@/types';
import styles from './KidList.module.scss';
import { Container, Typography } from '@/components/common';


const KidslList = () => {

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
  

const handleDelete = async (id:number) => {
const validKids = kids.filter((kid:ChildType)=> kid.id!==id );
setKids(validKids); 
try {
        await fetch(`users/me/children/${id}/`, 'DELETE');
      } catch (err) {
        console.log(err);
      }
}


  return (
    <section className={styles.section}>
        <Container className={styles.container}>
      <Typography className={styles.title} component='h2' variant='h2'>Вігвами дітей</Typography>
      {kids.length > 0 ? ( 
        <ul className={styles.list}>
          {kids.map((kid: ChildType) => (
              <KidProfile 
              key={kid.id}
              kid={kid}
              handleDelete={handleDelete}
              />
  ))}
  </ul>
 ) : (
  <p className={styles.text} >У вас поки немає створеного вігваму</p>
)} 
</Container>
</section>
)}


export default KidslList
