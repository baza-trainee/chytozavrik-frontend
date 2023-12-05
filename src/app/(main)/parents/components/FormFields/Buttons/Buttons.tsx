import React from 'react';
import styles from './Buttons.module.scss';
import { Button } from 'components/common';


const Buttons = ({onClick, secondBtnText} : {onClick: () => void, secondBtnText: "Створити" | "Зберегти"}) => {
  return (
    <div className={styles.buttonsWrapper}>
      <Button variant="outline" className={styles.button} onClick={onClick}>
        Скасувати
      </Button>
      <Button type="submit" color="secondary" className={styles.button}>
        {secondBtnText}
      </Button>
    </div>
  );
};

export default Buttons;