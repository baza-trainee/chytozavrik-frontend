import WigwamBooks from '@/components/WigwamBooks/WigwamBooks';
import Container from '../../components/common/Container/Container';
import WigwamReadBooks from '@/components/WigwamReadBooks/WigwamReadBooks';
import Layout from '@/components/Layout/Layout';

export default function Wigwam() {
  return (
    <main>
      <Container>
        <Layout>
          <WigwamReadBooks />
          <WigwamBooks />
        </Layout>
      </Container>
    </main>
  );
}
