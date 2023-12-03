import React from 'react'
import KidProfile from '../KidProfile';
import { ChildType } from '@/types';
import styles from './KidList.module.scss';

const KidslList = ({kids,  handleDelete}: {kids: ChildType[],  handleDelete: () => void }) => {


  return (
    <section>
      <h2>Вігвами дітей</h2>
      {kids.length > 0 ? ( 
        <ul className={styles.list}>
          {kids.map((kid) => (
              <KidProfile 
              key={kid.id}
              kid={kid}
              
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
