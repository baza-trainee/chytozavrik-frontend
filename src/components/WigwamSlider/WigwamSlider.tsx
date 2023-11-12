"use client"

import { useRef } from 'react'
import { Typography } from '../common/'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { BookAnswerType, BookType } from '@/types/Book'
import Image from 'next/image'
import { fetch } from '@/services/axios'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from './WigwamSlider.module.scss'


const WigwamSlider = () => {
	const sliderRef = useRef<any>()

	async function getBooks(): Promise<BookType[] | undefined> {
		try {
			const response = await fetch<BookAnswerType>('/books/');
			if (response.status === 'fail') {
				console.error('Failed to fetch books:', response.data.message);
				return undefined;
			} else {
				return response.data.results;
			}
		} catch (error) {
			console.error('Error fetching books:', error);
			return undefined;
		}
	}
	

	return (
		<div className={styles.slider}>
			<Typography component="h2" variant='h2' className={styles.title}>
				Рекомендовані книжки
			</Typography>
			<div className={styles.slider}>
				<div className={styles.slider__content}>
					<button onClick={() => sliderRef.current?.slidePrev()} type="button" className={styles.slider__arrow}>
						<ChevronLeft />
					</button>
					<div className={styles.slider_slides}>
						<Swiper
							spaceBetween={12}
							slidesPerView={4}
							onSwiper={it => (sliderRef.current = it)}
							grabCursor={true}
						>
							<SwiperSlide className={styles.slider_slide}>Slide 1</SwiperSlide>
							<SwiperSlide className={styles.slider_slide}>Slide 2</SwiperSlide>
							<SwiperSlide className={styles.slider_slide}>Slide 3</SwiperSlide>
							<SwiperSlide className={styles.slider_slide}>Slide 4</SwiperSlide>
							<SwiperSlide className={styles.slider_slide}>Slide 5</SwiperSlide>
							<SwiperSlide className={styles.slider_slide}>Slide 6</SwiperSlide>
						</Swiper>
						{/* <Image src={} width={145} height={173} alt="book preview"/> */}
					</div>
					<button onClick={() => sliderRef.current?.slideNext()} type="button" className={styles.slider__arrow}>
						<ChevronRight />
					</button>
				</div>
				<div className={styles.slider__pagination}></div>
			</div>
		</div>
	)
}

export default WigwamSlider