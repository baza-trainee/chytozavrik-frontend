import React from 'react';
import styles from './styles.module.scss';
import LightRays from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/LightRays';
import Cloud from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/Cloud';
import Book from '@/app/(wigwam)/wigwam/[childId]/awards/components/Images/Book';
import MonstersSlider
  from '@/app/(wigwam)/wigwam/[childId]/awards/components/MonsterDetails/MonstersSlider';
import { Monster} from '@/types/MonstersTypes';
import { MoveLeft } from 'lucide-react';


const MonsterDetails = ({results, setShowMonster}: {results: Monster[], setShowMonster: React.Dispatch<React.SetStateAction<boolean>>;}) => {
  return (
    <section className={styles.wrapper}>
      <button className={styles.button} onClick={() => setShowMonster(false)}>
        <MoveLeft color={'#FFFFFF'}/>
        До читозавриків
      </button>
      <LightRays className={styles.rays} />
      <Cloud className={styles.clouds} />
      <Book className={styles.book}/>
      <MonstersSlider results={results}/>
    </section>
  );
};

export default MonsterDetails;