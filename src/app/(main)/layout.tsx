import { Metadata } from 'next';

import '../globals.scss';
import Header from '@/app/(main)/components/Header/Header';
import Footer from 'components/Footer/Footer';
import CookiesPanel from 'components/Cookies/CookiesPanel';

export const metadata: Metadata = {
  title: 'Читозаврик',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <CookiesPanel />
  </>
);

export default RootLayout;
