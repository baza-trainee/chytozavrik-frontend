import AdditionalInfo from '@/components/AdditionalInfo/AdditionalInfo';
import CtaBlock from '@/components/CtaBlock/CtaBlock';
import Hero from 'components/Hero';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <CtaBlock />
        <AdditionalInfo />
      </main>
    </>
  );
}
