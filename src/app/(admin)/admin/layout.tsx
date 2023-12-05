import AdminProvider from '@/app/(admin)/components/Provider/AdminProvider';
import SideBar from '@/app/(admin)/components/SideBar/SideBar';
import '../../globals.scss';
import { ReactNode } from 'react';
import styles from './Admin.module.scss';

const Layout = ({ children }: { children: ReactNode }) => (
  <AdminProvider>
    <div className={styles.container}>
      <SideBar />
      {children}
    </div>
  </AdminProvider>
);

export default Layout;
