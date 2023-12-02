'use client';
import { useEffect, useState } from 'react';


import { useFetch } from '@/hooks';
import { useSession } from 'next-auth/react';

export default function KidSection() {
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

  return (
    <section>
      {/* {kids.length > 0 ? ( */}
        <ul>
          {kids.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      {/* ) : (
        <p>child-free</p>
      )} */}
    </section>
  );
}
