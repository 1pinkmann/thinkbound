import React, { useEffect, useRef } from 'react'
import SideText from '../../../common/SideText';
import Tabs from '../../../common/Tabs';

import background from '../../../images/industry/expanding-bg.png';
import IndustryCard from './IndustryCard';

import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import animateSideTextParallax from '../../../services/animateSideTextParallax';

gsap.registerPlugin(ScrollTrigger);

let menuItems = [
    { title: 'Self Storage', id: 1 },
    { title: 'Arts Culture', id: 2 },
    { title: 'Hospitality', id: 3 }
]

export default function Industry() {

    let menuItemRefs = useRef([]);

    let bgRef = useRef(null);

    let industryWrapperRef = useRef(null);

    let sideTextRef = useRef(null);

    useEffect(() => {
        let menuItemElements = menuItemRefs.current;
        let bgElement = bgRef.current;
        let industryWrapper = industryWrapperRef.current;
        let sideTextElement = sideTextRef.current;

        initMenuItemsAnumation(menuItemElements);
        initBackgroundAnimation(bgElement, industryWrapper);
        animateSideTextParallax(industryWrapper, sideTextElement);
    }, [])

    return (
        <section className="section industry">
            <div ref={industryWrapperRef} className="industry__wrapper container">
                <SideText text="industries" modificator="industry" sideTextRef={sideTextRef} />
                <h1 className="industry__title">
                    Industry Solutions.<br /> Be next!
                </h1>
                <Tabs refs={menuItemRefs} className="tabs--industry" menuItems={menuItems} Component={IndustryCard} />
            </div>
            <img src={background} ref={bgRef} alt="" className="industry__background" />
        </section>
    )
}

function initMenuItemsAnumation(menuItemElements) {

    ScrollTrigger.create({
        trigger: menuItemElements[0],
        start: "top center",
        onEnter: () => animateMenuItems(menuItemElements)
    })
}

function animateMenuItems(menuItemElements) {

    return gsap.to(menuItemElements, {
        duration: 0.3,
        xPercent: 110,
        stagger: 0.1,
        ease: 'Power4.out'
    })
}

function initBackgroundAnimation(bgElement, trigger) {

    let bgTl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: 'Power4.out'
        },
        scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
            end: "bottom center",
            scrub: 1
        },
    })
    bgTl
        .from(bgElement, {
            width: 0
        })
}
