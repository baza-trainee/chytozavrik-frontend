import AdditionalInfo from '@/components/AdditionalInfo/AdditionalInfo';
import CtaBlock from '@/components/CtaBlock/CtaBlock';
import Hero from 'components/Hero';
import  Header  from "../components/Header/Header";
import Advantages from '@/components/Advantages/Advantages';

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <CtaBlock />
        <Advantages />
        <AdditionalInfo />
      </main>
    </>
  );
}
