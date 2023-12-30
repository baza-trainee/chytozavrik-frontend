import React, { useState } from 'react';
// import { AdminHeader, TableHeader } from '@/app/(admin)/components';
import { Metadata } from 'next';
import PartnersList from './components/PartnersList/PartnersList';
// import { Route } from '@/constants';
// import styles from './Partners.module.scss';

export const metadata: Metadata = {
  title: 'Партнери - Читозаврик',
};

const Partners = () => <PartnersList />;

export default Partners;
