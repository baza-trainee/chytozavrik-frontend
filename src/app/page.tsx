import AdditionalInfo from '@/components/AdditionalInfo';
import Donate from '@/components/Donate';
import Hero from 'components/Hero';
import Advantages from '@/components/Advantages';
import Partners from '@/components/Partners';

export default function Home() {
  return (
    <main>
      <Hero />
      <Donate />
      <AdditionalInfo />
      <Advantages />
      <Partners />
    </main>
  );
}
