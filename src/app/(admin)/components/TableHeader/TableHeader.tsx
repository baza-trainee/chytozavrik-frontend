import React from 'react';
import styles from './TableHeader.module.scss'
import classNames from 'classnames';

interface TableHeaderProps {
  colNames:string[],
  isDocument?: boolean,
  variant: "users" | "books" | "documents" | "partners"
}

const TableHeader = ({colNames, variant } : TableHeaderProps) => {
  const styleNames = {
    users: styles.users,
    books: styles.books,
    documents: styles.documents,
    partners: styles.partners,
  }

  return (
    <div className={styles.header}>
      <div className={classNames(styleNames[variant], styles.names)}>
        {colNames.map((item, index) =>
          <div key={index}>{item}</div>
        )}
      </div>
    </div>
  );
};

export default TableHeader;