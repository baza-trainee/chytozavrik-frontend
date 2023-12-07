import { AdminProvider, SideBar } from '@/app/(admin)/components';
import styles from './Admin.module.scss';
import '../../globals.scss';


export default function Layout({ children, params: { childId } }: {
  children: React.ReactNode, params: {
    childId: string
  }
}) {

  return (
    <AdminProvider>
      <main className={styles.container}>
        <SideBar />
        <section className={styles.section}>
          {children}
        </section>
      </main>
    </AdminProvider>
  );
}