import AdditionalInfo from '@/components/AdditionalInfo';
import Donate from '@/components/Donate';
import Hero from 'components/Hero';

import Advantages from '@/components/Advantages';
import About from '@/components/About/About';
import AboutDetail from '@/components/AboutDetail/AboutDetail';
import Partners from '@/components/Partners';
import Auth from '@/components/Auth';



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <AboutDetail />
      <Donate />
      <Advantages />
      <Partners />
      <AdditionalInfo />
      <Auth />

    </main>

    
  );
}
