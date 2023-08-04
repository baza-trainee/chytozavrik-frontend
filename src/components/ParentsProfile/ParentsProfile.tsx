import React, {useState} from 'react';
import {Container, Button, Typography} from 'components/common/'
import Image from 'next/image';
import styles from './ParentsProfile.module.scss';
import avatar from '../../../public/images/avatar-parents.svg';
import wigwam from '../../../public/images/wigwam.svg';
import Notification from '../Notification/Notification';

export default function ParentsProfile() {



    return (
        <section className={styles.section}>
            <Container className={styles.container}>
                <Image src={avatar} className={styles.image} alt ='аватарка батьків' width='106'/>
                <Button color='secondary' className={styles.button}>
                    <Image src={wigwam} width='24' alt='іконка вігваму' />
                <Typography className={styles.text} component="span" variant="h5">
                Створити вігвам
                </Typography>
                </Button>
            <Notification/>    
            </Container>  
              
        </section>
    )
}