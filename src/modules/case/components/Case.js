import React from 'react'
import { Particles } from 'react-particles-js';

import Button from '../../../common/Button'
import Carousel from '../../../common/Carousel/Carousel'
import SideText from '../../../common/SideText'
import bg from '../../../images/case/card.png'

import Params from '../../../particlesParams/particles.json';

let gallery = [
    { title: 'Vifloor', text: 'Web App Development', href: '#', bg: bg, id: 1 }
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
                <Carousel gallery={gallery} />
            </div>
        </section>

    )
}
