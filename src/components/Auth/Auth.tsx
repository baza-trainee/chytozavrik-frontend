'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import Modal from '../common/Modal';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignUpSuccess from './SignUpSuccess';
import { Route } from '@/constants';

type AuthType = 'signin' | 'signup' | 'forgot-password' | 'signup-success' | null;

const Auth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authType, setAuthType] = useState<AuthType>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const session = useSession();

  const closeModal = () => {
    router.replace('/', { shallow: true });
  };

  useEffect(() => {
    const type = searchParams.get('auth') as AuthType;

    setAuthType(type);
    setIsModalOpen(type === 'signin' || type === 'signup' || type === 'signup-success');
  }, [searchParams]);

  useEffect(() => {
    if (session.data?.user?.token?.error) {
      signOut({ callbackUrl: Route.HOME });
    }
  }, [session]);

  return (
    <>
      {isModalOpen && session.status !== 'authenticated' && authType === 'signin' && (
        <Modal onClose={closeModal}>{<SignIn />}</Modal>
      )}

      {isModalOpen && session.status !== 'authenticated' && authType === 'signup' && (
        <Modal onClose={closeModal}>{<SignUp />}</Modal>
      )}

      {isModalOpen && session.status === 'authenticated' && authType === 'signup-success' && (
        <Modal onClose={closeModal}>{<SignUpSuccess />}</Modal>
      )}
    </>
  );
};

export default Auth;
