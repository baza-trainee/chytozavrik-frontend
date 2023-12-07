import { getServerSession } from 'next-auth';
import { authOptions } from '@/config';
import AdditionalInfo from '@/components/AdditionalInfo';
import Donate from '@/components/Donate';
import Hero from 'src/app/(main)/components/Hero';
import Advantages from 'src/app/(main)/components/Advantages';
import About from '@/components/About/About';
import AboutDetail from '@/components/AboutDetail/AboutDetail';
import Partners from 'src/app/(main)/components/Partners';
import Auth from '@/components/Auth';
import { Refresh } from '@/components/Refresh/Refresh';
import GratitudeForDonate from 'components/Donate/Gratitude/GratitudeForDonate';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
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
    </>
  );
}
