import { Metadata } from 'next';

import '../globals.scss';
import Header from '@/app/(main)/components/Header/Header';
import Footer from 'components/Footer/Footer';
import CookiesPanel from 'components/Cookies/CookiesPanel';

export const metadata: Metadata = {
  title: 'Інтерактивна Вікторина Для Маленьких Читолюбів - Читозаврик',
  description:
    'Додаток розроблений спеціально для дітей віком від 6 до 9 років. Захоплюючі книжкові вікторини дозволяють не тільки закріпити знання про прочитане, а ще й розвивати розумові навички.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32X32.png',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon/favicon.icon',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16X16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
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
