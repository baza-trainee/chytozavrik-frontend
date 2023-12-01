
import WigwamProvider from '@/app/(wigwam)/components/Provider/WigmawProvider';
import WigwamHeader from '@/app/(wigwam)/components/header/WigwamHeader';
import WigwamFooter from '@/app/(wigwam)/components/footer/WigwamFooter';
import CookiesPanel from 'components/Cookies/CookiesPanel';
import { fetch } from '@/services/axios';
import { notFound } from 'next/navigation';
import { Avatar,ChildResults } from '@/types/ChildrenResults';
import '../../../globals.scss';



export default async function Layout({ children, params: {childId}}: { children: React.ReactNode, params: {
    childId: string
  } }) {
  const childReq = await fetch<ChildResults>(`/users/me/children/${childId}/`)
  const avatarReq = await fetch<Avatar[]>(`/avatars/`)

  if (childReq.status === 'fail' || avatarReq.status === 'fail') notFound();

  const childAvatar = avatarReq.data.filter((avatar) => avatar.id === childReq.data.avatar)
  console.log(childAvatar);

  return (
    <WigwamProvider>
      <WigwamHeader childId={childId} name={childReq.data.name} avatar={childAvatar[0].avatar} />
      {children}
      <WigwamFooter childId={childId}/>
      <CookiesPanel/>
    </WigwamProvider>
  );
}