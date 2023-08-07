import styles from './KidsProfile.module.scss'
import  Container from '../common/Container/Container'
import  Typography from '../common/Typography/Typography'


export default function KidsProfile() {
    return(

<section className={styles.section}>
    <Container className={styles.container}>
        <Typography component='h2' variant='h3' className={styles.title}>
        Вігвами дітей
        </Typography>
        <Typography component='p' variant='body' className={styles.text}>
        У вас поки немає створеного вігваму
        </Typography>
    </Container>

</section>

    )
};
