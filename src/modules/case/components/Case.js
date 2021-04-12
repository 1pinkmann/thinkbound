import React, { useEffect, useState } from 'react'

import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper/core';

import Button from '../../../common/Button'
import SideText from '../../../common/SideText'
import bg from '../../../images/case/card.png'
import itemImage from '../../../images/case/case-image.png';

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

    const [slides, setSlides] = useState({});

    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 40,
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar'
            },
            navigation: {
                prevEl: '.swiper-button--left',
                nextEl: '.swiper-button--right',
            },
            grabCursor: true,
        });

        setSlides({
            total: swiper.slides.length,
            current: 1
        });


        swiper.on('slideChange', () => {
            setSlides({
                total: swiper.slides.length,
                current: ++swiper.realIndex
            })
        })
    }, [])

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
                            <img src={itemImage} alt="" className="case__item-image" />
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
                <div className="swiper">
                    <div className="swiper-container">
                        <ul className="swiper-wrapper">
                            {gallery.map(item => {
                                return (
                                    <li className="swiper-slide" key={item.id}>
                                        <CaseCard item={item} />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="swiper-pagination-wrapper">
                        <span className="swiper-pagination-count swiper-pagination-count--left" id="current">{slides.current}</span>
                        <span className="swiper-pagination"></span>
                        <span className="swiper-pagination-count swiper-pagination-count--right" id="total">{slides.total}</span>
                    </div>
                    <button className="swiper-button swiper-button--left">
                        <span className="arrow arrow--v2"></span>
                    </button>
                    <button className="swiper-button swiper-button--right">
                        <span className="arrow arrow--v2"></span>
                    </button>
                </div>
            </div>
        </section>

    )
}
