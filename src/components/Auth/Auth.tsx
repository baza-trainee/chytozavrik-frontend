'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Modal from '../common/Modal';
import SignIn from './SignIn';
import SignUp from './SignUp';

type AuthType = 'signin' | 'signup' | 'forgot-password' | null;

const Auth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authType, setAuthType] = useState<AuthType>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const closeModal = () => {
    router.replace('/', { shallow: true });
  };

  useEffect(() => {
    const type = searchParams.get('auth') as AuthType;

    setAuthType(type);
    setIsModalOpen(type === 'signin' || type === 'signup');
  }, [searchParams]);

  return (
    <>
      {isModalOpen && authType === 'signin' && <Modal onClose={closeModal}>{<SignIn />}</Modal>}
      {isModalOpen && authType === 'signup' && <Modal onClose={closeModal}>{<SignUp />}</Modal>}
    </>
  );
};

export default Auth;