import React from 'react';
import { Trash2 } from 'lucide-react';
import styles from './TableHeader.module.scss'

interface TableHeaderProps {
  withDelete: boolean,
  colNames:string[],
  isDocument?: boolean,
  deleteFunc?: () => void,
}

const TableHeader = ({withDelete, colNames, deleteFunc, isDocument } : TableHeaderProps) => {
  const styleNames = isDocument ? `${styles.names} ${styles.lastName}` : styles.names

  return (
    <div className={styles.header}>
      <div className={styleNames}>
        {colNames.map((item, index) =>
          <div key={index}>{item}</div>
        )}
      </div>
      {withDelete && <div className={styles.delete} onClick={deleteFunc}>
        <Trash2 width={16} height={16}/>
      </div>}
    </div>
  );
};

export default TableHeader;