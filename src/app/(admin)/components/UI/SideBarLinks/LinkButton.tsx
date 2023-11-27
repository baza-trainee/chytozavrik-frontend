import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './LinkButton.module.scss';

interface LinkButtonProps {
  href: string,
  anchor: string,
  icon: ReactNode,
  iconOpen?: ReactNode

}

const LinkButton = ({ href, anchor, icon, iconOpen }: LinkButtonProps) => {

  return (
    <Link href={href} className={styles.link}>
      <div>
        {icon}
      </div>
      {anchor}
      {iconOpen &&
        <div className={styles.arrow}>
          {iconOpen}
        </div>
      }
    </Link>
  );
};

export default LinkButton;