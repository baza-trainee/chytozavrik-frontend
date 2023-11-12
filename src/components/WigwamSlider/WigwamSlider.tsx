"use client"

import { useEffect, useRef } from 'react'
import { Spinner, Typography } from '../common/'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { BookAnswerType, BookType } from '@/types/Book'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from './WigwamSlider.module.scss'
import { useFetch } from '@/hooks'


const WigwamSlider = () => {
	const sliderRef = useRef<any>()

	useEffect(() => {
		fetch(`/books/`)
	}, [])

	const recommendedBooks = answerBooks?.results.filter(book => book.is_recommended === false)

	console.log(error)

	return (
		<div className={styles.slider}>
			<Typography component="h2" variant='h2' className={styles.title}>
				Рекомендовані книжки
			</Typography>
			<div className={styles.slider}>
				{error && (
					<Typography component="p" variant='h4' className={styles.error}>
						{error}
					</Typography>
				)}
				{!error && (
					<>
						<div className={styles.slider__content}>
							<button onClick={() => sliderRef.current?.slidePrev()} type="button" className={styles.slider__arrow}>
								<ChevronLeft />
							</button>
							<div className={styles.slider_slides}>
								{isLoading && <Spinner/>}
								{
									<Swiper
										spaceBetween={12}
										slidesPerView={4}
										onSwiper={it => (sliderRef.current = it)}
										grabCursor={true}
									>
										{recommendedBooks?.map(book => (
											<SwiperSlide key={book.id} className={styles.slider_slide}>
												<Image 
													src={book.cover_image!} 
													width={145} 
													height={173} 
													alt="book preview"
												/>
											</SwiperSlide>
										))}
									</Swiper>
								}
							</div>
							<button onClick={() => sliderRef.current?.slideNext()} type="button" className={styles.slider__arrow}>
								<ChevronRight />
							</button>
						</div>
						<div className={styles.slider__pagination}></div>
					</>
				)}
			</div>
		</div>
	)
}

export default WigwamSlider