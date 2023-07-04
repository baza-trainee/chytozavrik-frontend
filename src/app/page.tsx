import AdditionalInfo from '@/components/AdditionalInfo';
import CtaBlock from '@/components/CtaBlock';
import Hero from 'components/Hero';
import Advantages from '@/components/Advantages';

export default function Home() {
  return (
    <main>
      <Hero />
      <CtaBlock />
      <AdditionalInfo />
      <Advantages />
    </main>
  );
}
