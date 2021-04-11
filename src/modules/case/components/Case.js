import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';

import Button from '../../../common/Button'
import SideText from '../../../common/SideText'
import bg from '../../../images/case/card.png'

import Params from '../../../particlesParams/particles.json';
import { Particles } from 'react-particles-js';
import CaseCard from './CaseCard';

SwiperCore.use([Navigation, Pagination]);

let gallery = [
    { title: 'Vifloor', text: 'Web App Development', href: '#', bg: bg, id: 1 },
    { title: 'Vifloor', text: 'Web App Development', href: '#', bg: bg, id: 2 },
    { title: 'Vifloor', text: 'Web App Development', href: '#', bg: bg, id: 3 },
    { title: 'Vifloor', text: 'Web App Development', href: '#', bg: bg, id: 4 },
]

export default function Case() {

    return (
        <section className="section case">
            <div className="title case__title container">
                <div className="title__cat">Case Studies</div>
                <h1>Success Stories</h1>
            </div>
            <Particles params={Params} className="particles particles--case" />
            <div className="case__wrapper container">
                <SideText text='case studies' />
                <div className="case__column">
                    <ul className="case__list">
                        <li className="case__item">
                            <h3 className="case__item-title">Client:</h3>
                            <img src="./images/case/case-image.png" alt="" className="case__item-image" />
                        </li>
                        <li className="case__item">
                            <h3 className="case__item-title">Accomplishments: </h3>
                            <p className="case__item-text">
                                Custom WordPress
                                Visualizer using latest transformations
                                Lasy load and deferred assets
                            </p>
                        </li>
                        <li className="case__item">
                            <h3 className="case__item-title">Kind Words:</h3>
                            <p className="case__item-text">
                                “Thinkbound Inc. implements impressive technical expertise and a thoughtful
                                problem-solving
                                mindset.”
                            </p>
                        </li>
                    </ul>
                    <Button type='link' className='case__button' text='View Case study' textClass='button__text--blue' href='#' />
                </div>
                <Swiper
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {gallery.map(item => {
                            return (
                                <SwiperSlide className="carousel__item" key={item.id}>
                                    <CaseCard item={item} />
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </div>
        </section>

    )
}
