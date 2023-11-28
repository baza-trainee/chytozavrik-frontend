import AdminProvider from '@/app/(admin)/components/Provider/AdminProvider';
import styles from './Admin.module.scss';
import SideBar from '@/app/(admin)/components/SideBar/SideBar';
import '../../globals.scss'

export default function Layout({ children, params: { childId } }: {
  children: React.ReactNode, params: {
    childId: string
  }
}) {

  return (
    <AdminProvider>
      <div className={styles.container}>
        <SideBar />
        {children}
      </div>
    </AdminProvider>
  );
}