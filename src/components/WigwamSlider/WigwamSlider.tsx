"use client"

import { useEffect, useRef } from 'react'
import { Spinner, Typography } from '../common/'
import { useFetch } from '@/hooks'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { BookAnswerType } from '@/types/Book'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import styles from './WigwamSlider.module.scss'
import './WigwamSlider.module.scss'


const WigwamSlider = () => {
	const sliderRef = useRef<any>()
	const { data: answerBooks, isLoading, error, fetch} = useFetch<BookAnswerType>();

	useEffect(() => {
		fetch(`/books/`)
	}, [])

	const recommendedBooks = answerBooks?.results.filter(book => book.is_recommended === false)

	return (
		<>
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
										pagination={{
											el: "#containerForBullets",
											type: "bullets",
											bulletClass: "swiper-pagination-bullet slider_bullet_span", 
											dynamicBullets: true,
											clickable: true,
									   }}
										modules={[Pagination]}
										breakpoints={{
											360: {
											  slidesPerView: 2,
											  spaceBetween: 11,
											},
											768: {
											  slidesPerView: 3,
											  spaceBetween: 12,
											},
											1024: {
											  slidesPerView: 4,
											  spaceBetween: 8,
											},
										}}
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
							<div id="containerForBullets" className={styles.slider__pagination}></div>
							<button onClick={() => sliderRef.current?.slideNext()} type="button" className={styles.slider__arrow}>
								<ChevronRight />
							</button>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default WigwamSlider