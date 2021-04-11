import React from 'react'
import CaseCard from '../../modules/case/components/CaseCard';
import CarouselButton from './CarouselButton';

export default function Carousel({ gallery }) {
    return (
        <div className="carousel">
            <div className="carousel__wrapper">
                <ul className="carousel__gallery">
                    {gallery.map(item => {
                        return (
                            <li key={item.id} className="carousel__item">
                                <CaseCard item={item} />
                            </li>
                        );
                    })}

                </ul>
            </div>
            <div className="carousel__progress">
                <div className="carousel__progress-count carousel__progress-count--blue">01</div>
                <div className="carousel__progress-bar">
                    <div className="carousel__progress-fill" />
                </div>
                <div className="carousel__progress-count">02</div>
            </div>
            <CarouselButton side={'left'} />
            <CarouselButton side={'right'} />
        </div>
    )
}
