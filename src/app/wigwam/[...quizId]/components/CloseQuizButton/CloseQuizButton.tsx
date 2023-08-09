'use client';

import type { ButtonHTMLAttributes } from 'react';
import { XButton } from '@/components/common';
import { useRouter } from 'next/navigation';
import { Route } from '@/constants';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const CloseQuizButton = (props: Props) => {
  const router = useRouter();

  const closeHandler = () => {
    router.replace(Route.WIGWAM);
  };
  return <XButton {...props} onClick={closeHandler} />;
};

export default CloseQuizButton;
