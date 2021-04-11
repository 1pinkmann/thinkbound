import React from 'react'

export default function CarouselButton({side}) {
    return (
        <button className={"carousel__button carousel__button--" + side}>
            <div className="arrow arrow--v2" />
        </button>
    )
}
