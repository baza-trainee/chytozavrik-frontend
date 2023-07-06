import AdditionalInfo from '@/components/AdditionalInfo';
import Donate from '@/components/Donate';
import Hero from 'components/Hero';
import Advantages from '@/components/Advantages';

import About from '@/components/About/About';
import AboutDetail from '@/components/AboutDetail/AboutDetail';

import Partners from '@/components/Partners';


export default function Home() {
  return (
    <main>
      <Hero />

      <About/>
      <AboutDetail/>


      <Donate />

      <AdditionalInfo />
      <Advantages />
      <Partners />
    </main>
  );
}
