import CtaBlock from '@/components/CtaBlock/CtaBlock';
import Hero from 'components/Hero';
import  Header  from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <CtaBlock />
      </main>
    </>
  );
}
