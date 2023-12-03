import  { useState, useEffect } from 'react';
import { useFetch } from '@/hooks';
import { useSession } from 'next-auth/react';
import KidProfile from '../KidProfile';
import { ChildType } from '@/types';
import styles from './KidList.module.scss';


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
      } finally {
          console.log(id)
      }
}


  return (
    <section>
      <h2>Вігвами дітей</h2>
      {kids.length > 0 ? ( 
        <ul className={styles.list}>
          {kids.map((kid: ChildType) => (
              <KidProfile 
              key={kid.id}
              kid={kid}
              //handleEdit={handleEdit}
              handleDelete={handleDelete}
              />
  ))}
  </ul>
 ) : (
  <p>У вас поки немає створеного вігваму</p>
)} 
</section>
)}


export default KidslList
