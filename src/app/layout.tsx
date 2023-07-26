import { Metadata } from 'next';
import { Raleway, Montserrat_Alternates } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '../components/Footer/Footer';
import './globals.scss';

const raleway = Raleway({
  variable: '--raleway-font',
  weight: ['300', '400', '500', '800'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

const montserratAlternates = Montserrat_Alternates({
  variable: '--montserrat-alternates-font',
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Читозаврик',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${raleway.variable} ${montserratAlternates.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
