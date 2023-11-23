
import WigwamProvider from '@/app/(wigwam)/components/Provider/WigmawProvider';
import { Montserrat_Alternates, Raleway } from 'next/font/google';
import WigwamHeader from '@/app/(wigwam)/components/header/WigwamHeader';
import '../globals.scss';


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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${raleway.variable} ${montserratAlternates.variable}`}>
    <body>
    <WigwamProvider>
      <WigwamHeader/>
      {children}
    </WigwamProvider>
    </body>
    </html>
  );
}