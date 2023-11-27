import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './LinkButton.module.scss';
import { usePathname } from 'next/navigation';

interface LinkButtonProps {
  href: string,
  anchor: string,
  icon: ReactNode,
  iconOpen?: ReactNode

}

const LinkButton = ({ href, anchor, icon, iconOpen }: LinkButtonProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${styles.link} ${pathname === href && styles.active}`} >
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