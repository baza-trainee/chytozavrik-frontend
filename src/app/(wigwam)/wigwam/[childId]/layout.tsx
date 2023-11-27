
import WigwamProvider from '@/app/(wigwam)/components/Provider/WigmawProvider';
import { Montserrat_Alternates, Raleway } from 'next/font/google';
import WigwamHeader from '@/app/(wigwam)/components/header/WigwamHeader';
import '../../../globals.scss';
import WigwamFooter from '@/app/(wigwam)/components/footer/WigwamFooter';
import CookiesPanel from 'components/Cookies/CookiesPanel';



export default function Layout({ children, params: {childId}}: { children: React.ReactNode, params: {
    childId: string
  } }) {

  return (
    <WigwamProvider>
      <WigwamHeader childId={childId} />
      {children}
      <WigwamFooter childId={childId}/>
      <CookiesPanel/>
    </WigwamProvider>
  );
}