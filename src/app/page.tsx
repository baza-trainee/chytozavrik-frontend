import { getServerSession } from 'next-auth';
import { authOptions } from '@/config';
import AdditionalInfo from '@/components/AdditionalInfo';
import Donate from '@/components/Donate';
import Hero from 'components/Hero';
import Advantages from '@/components/Advantages';
import About from '@/components/About/About';
import AboutDetail from '@/components/AboutDetail/AboutDetail';
import Partners from '@/components/Partners';
import Auth from '@/components/Auth';
import { Refresh } from '@/components/Refresh/Refresh';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      {session ? (
        <>
          <Hero />
          <About />
          <Advantages />
          <Donate />
          <Partners />
          <AdditionalInfo />
        </>
      ) : (
        <>
          <Hero />
          <About />
          <AboutDetail />
          <Donate />
          <Advantages />
          <Partners />
          <AdditionalInfo />
        </>
      )}

      <Auth />
      <Refresh />
    </main>
  );
}
