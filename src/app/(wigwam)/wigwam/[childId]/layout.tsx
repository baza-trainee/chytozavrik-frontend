
import WigwamProvider from '@/app/(wigwam)/components/Provider/WigmawProvider';
import { Montserrat_Alternates, Raleway } from 'next/font/google';
import WigwamHeader from '@/app/(wigwam)/components/header/WigwamHeader';
import '../../../globals.scss';
import WigwamFooter from '@/app/(wigwam)/components/footer/WigwamFooter';


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

export default function Layout({ children, params: {childId}}: { children: React.ReactNode, params: {
    childId: string
  } }) {

  return (
    <html lang="uk" className={`${raleway.variable} ${montserratAlternates.variable}`}>
    <body>
    <WigwamProvider>
      <WigwamHeader childId={childId} />
      {children}
      <WigwamFooter childId={childId}/>
    </WigwamProvider>
    </body>
    </html>
  );
}