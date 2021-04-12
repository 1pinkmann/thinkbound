import React, { useEffect, useState } from 'react'
import CustomSwiperPagination from './CustomSwiperPagination';
import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

export default function CustomSwiper({gallery, Component}) {

    const [slides, setSlides] = useState({});

    useEffect(() => {
        initSwiper(setSlides);
    }, [])

    return (
        <div className="swiper">
            <div className="swiper-container">
                <ul className="swiper-wrapper">
                    {gallery.map(item => {
                        return (
                            <li className="swiper-slide" key={item.id}>
                                <Component item={item} />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <CustomSwiperPagination slides={slides} />
            <button className="swiper-button swiper-button--left">
                <span className="arrow arrow--v2"></span>
            </button>
            <button className="swiper-button swiper-button--right">
                <span className="arrow arrow--v2"></span>
            </button>
        </div>
    )
}

function initSwiper(setSlides) {
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
}
