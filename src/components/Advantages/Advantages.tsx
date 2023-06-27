import React from 'react'
import { Container, Typography } from '../common'
import styles from './Advantages.module.scss'
import Image from 'next/image'
import book from '../../../public/images/advantages-book-image.svg'
import medal from'../../../public/images/advantages-medal-image.svg'
import smart from '../../../public/images/advantages-smart-image.svg'

const Advantages = () => {
    return (
        <section className={styles.advantages}>
            <Container className={styles.container}>
                <Typography component='p' variant='h2' className={styles.title}>Додаток створений, щоб допомогти дитині</Typography>
                <section className={styles.section}>
                    <article>
                        <Image src={book} alt='book' width={87} height={79}/>
                        <Typography component='p' variant='h4' className='label'>
                            Зробити читання приємною і корисною звичкою
                        </Typography>
                    </article>
                    <article>
                        <Image src={medal} alt='book' width={87} height={79}/>
                        <Typography component='p' variant='h4' className='label'>
                            Пишатися своїми успіхами та досягненями у читанні 
                        </Typography>
                    </article>
                    <article>
                        <Image src={smart} alt='book' width={87} height={79} />
                        <Typography component='p' variant='h4' className='label'>
                            Розвивати мислення, уяву та аналітичні здібності
                        </Typography>
                    </article>
                </section>
            </Container>
        </section>
    )
}

export default Advantages
