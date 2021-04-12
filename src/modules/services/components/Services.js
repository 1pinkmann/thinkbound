import React, { useEffect, useRef } from 'react';
import SideText from '../../../common/SideText';

import pc from '../../../icons/pc.png';
import optimization from '../../../icons/optimization.png';
import applications from '../../../icons/applications.png';
import marketing from '../../../icons/marketing.png';
import ServicesCard from './ServicesCard';

import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import animateSideTextParallax from '../../../services/animateSideTextParallax';

gsap.registerPlugin(ScrollTrigger);

// Until we have API
let servicesCards = [
    {
        icon: pc,
        title: 'Websites + Digital Development',
        items: [
            {title: 'Accessible Websites', id: 1},
            {title: 'Custom WordPress', id: 2},
            {title: 'Web Applications', id: 3}
        ],
        id: 1
    },
    {
        icon: optimization,
        title: 'Optimization',
        items: [
            {title: 'Search Engine Optimization', id: 4},
            {title: 'Performance Security', id: 5},
            {title: 'Website Rescue', id: 6}
        ],
        id: 2
    },
    {
        icon: applications,
        title: 'Applications + Integrations',
        items: [
            {title: 'Buisness Portals', id: 7},
            {title: 'Application Integration', id: 8}
        ],
        id: 3
    },
    {
        icon: marketing,
        title: 'Brand + Marketing',
        items: [
            {title: 'Brand Identity', id: 9},
            {title: 'Print Solutions', id: 10},
            {title: 'Social Media', id: 11},
            {title: 'Digital Advertising', id: 12}
        ],
        id: 4
    }
]

export default function Services() {
    let cardRefs = useRef([]);
    let cardWrapperRef = useRef(null);
    let servicesWrapperRef = useRef(null);
    let sideTextRef = useRef(null);

    useEffect(() => {
        let cardElements = cardRefs.current;
        let cardWrapperElement = cardWrapperRef.current;
        let servicesWrapperElement = servicesWrapperRef.current;
        let sideTextElement = sideTextRef.current;

        initCardsParallax(cardElements, cardWrapperElement);
        animateSideTextParallax(servicesWrapperElement, sideTextElement);
    }, [])

    return (
        <section className="section services container" ref={servicesWrapperRef}>
            <SideText text='services' sideTextRef={sideTextRef}/>
            <div className="services__text-wrapper">
                <div className="services__text services__text--small">Our Services</div>
                <div className="services__text services__text--sticky">Break through with Thinkbound Services</div>
            </div>
            <ul className="services__cards" ref={cardWrapperRef}>
               {servicesCards.map(item => {
                   return <ServicesCard refs={cardRefs} key={item.id} item={item} />
               })}
            </ul>
        </section>

    )
}

function initCardsParallax(cardElements, cardWrapperElement) {

    let parallaxTl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: 'Power1.out'
        },
        scrollTrigger: {
            trigger: cardWrapperElement,
            start: "top center",
            end: "bottom top",
            scrub: 1
        },
    });

    parallaxTl
        .from(cardElements, {
            yPercent: 15,
            stagger: 0.12
        })
}
