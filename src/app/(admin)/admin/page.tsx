import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';
import styles from './Admin.module.scss'

const Admin = () => {
  return (
    <div className={styles.users}>
      <AdminHeader
        withSearch={true}
        withButton={false}
        withClose={false}
        heading='Користувачі'
        searchWord={"value"}
      />
      <div>
        Place here another parts
      </div>
    </div>
  )
}

export default Admin;