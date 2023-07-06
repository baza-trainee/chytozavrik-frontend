import AdditionalInfo from '@/components/AdditionalInfo';
import CtaBlock from '@/components/CtaBlock';
import Hero from 'components/Hero';
import Advantages from '@/components/Advantages';
import About from '@/components/About/About';
import AboutDetail from '@/components/AboutDetail/AboutDetail';

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <AboutDetail/>
      <CtaBlock />
      <AdditionalInfo />
      <Advantages />
    </main>
  );
}
