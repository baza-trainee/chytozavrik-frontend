import AdditionalInfo from '@/components/AdditionalInfo';
import Donate from '@/components/Donate';
import Hero from 'components/Hero';
import Advantages from '@/components/Advantages';

export default function Home() {
  return (
    <main>
      <Hero />
      <Donate />
      <AdditionalInfo />
      <Advantages />
    </main>
  );
}
