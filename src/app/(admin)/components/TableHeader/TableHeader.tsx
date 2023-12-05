import React from 'react';
import styles from './TableHeader.module.scss'

interface TableHeaderProps {
  colNames:string[],
  isDocument?: boolean,
}

const TableHeader = ({colNames, isDocument } : TableHeaderProps) => {
  const styleNames = isDocument ? `${styles.names} ${styles.lastName}` : styles.names

  return (
    <div className={styles.header}>
      <div className={styleNames}>
        {colNames.map((item, index) =>
          <div key={index}>{item}</div>
        )}
      </div>
    </div>
  );
};

export default TableHeader;