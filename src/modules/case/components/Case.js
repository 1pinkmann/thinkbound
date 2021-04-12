import React, { useEffect, useRef } from 'react'

import Button from '../../../common/Button'
import SideText from '../../../common/SideText'
import bg from '../../../images/case/card.png'
import itemImage from '../../../images/case/case-image.png';

import CaseCard from './CaseCard';
import CustomSwiper from './../../../common/CustomSwiper/CustomSwiper';
import CustomParticles from '../../../common/CustomParticles/CustomParticles';
import animateSideTextParallax from '../../../services/animateSideTextParallax';

let gallery = [
    { title: 'Vifloor', text: 'Web App Development', href: '#', bg: bg, id: 1 },
    { title: 'Vifloor', text: 'Web App Development', href: '#', bg: bg, id: 2 },
    { title: 'Vifloor', text: 'Web App Development', href: '#', bg: bg, id: 3 },
    { title: 'Vifloor', text: 'Web App Development', href: '#', bg: bg, id: 4 },
]

export default function Case() {

    let caseWrapperRef = useRef(null);
    let sideTextRef = useRef(null);

    useEffect(() => {
        let caseWrapperElement = caseWrapperRef.current;
        let sideTextElement = sideTextRef.current;

        animateSideTextParallax(caseWrapperElement, sideTextElement);
    }, [])

    return (
        <section className="section case" ref={caseWrapperRef}>
            <div className="title case__title container">
                <div className="title__cat">Case Studies</div>
                <h1>Success Stories</h1>
            </div>
            <CustomParticles modificator="case" />
            <div className="case__wrapper container">
                <SideText text='case studies' sideTextRef={sideTextRef} />
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
                <CustomSwiper gallery={gallery} Component={CaseCard} />
            </div>
        </section>

    )
}
