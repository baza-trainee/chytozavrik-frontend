'use client';

import  { useState, useEffect } from 'react';
import Parents from 'src/app/(main)/parents/components/Parents';
import CreateWigwam from '@/components/CreateWigwam';
import KidsList from './components/KidsList';
import EditWigwam from './components/EditWigwam';
import { useFetch } from '@/hooks';
import { useSession } from 'next-auth/react';


export default function ParentsPage() {

  const [kids, setKids] = useState([]);
  const { status } = useSession();
  const { fetch } = useFetch();

  useEffect(() => {
    const getKidProfile = async () => {
      const response = await fetch('users/me/children/');
      const kids = await response?.data as [];
      setKids(kids);
    };
    if (status === 'authenticated') getKidProfile();
  }, [status]);

  
  const deleteProfile = () => {
    console.log('delete');
  }




  const [wigwam, setWigwam] = useState(false);
  const [edit, setEdit] = useState(false);

  const toggleCreateWigwam = () => {
    if (!wigwam) setWigwam(true);
    else setWigwam(false);
  };

  // const toggleEditWigwam = () => {
  //   if (!edit) setEdit(true);
  //   else setEdit(false);
  // };

  return (
    <main>
      <Parents handleClick={toggleCreateWigwam} />
      {wigwam && <CreateWigwam closeCreateWigwam={toggleCreateWigwam} />}
      <KidsList kids ={kids} 
      // handleEdit={toggleEditWigwam}
      handleDelete={deleteProfile}/>
      {/* {edit && <EditWigwam closeEditWigwam={toggleEditWigwam} />} */}
    </main>
  );
}