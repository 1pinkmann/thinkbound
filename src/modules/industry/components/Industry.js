import React, { useEffect, useRef } from 'react'
import SideText from '../../../common/SideText';
import Tabs from '../../../common/Tabs';

import background from '../../../images/industry/expanding-bg.png';
import IndustryCard from './IndustryCard';

import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let menuItems = [
    { title: 'Self Storage', id: 1 },
    { title: 'Arts Culture', id: 2 },
    { title: 'Hospitality', id: 3 }
]

export default function Industry() {

    let menuItemRefs = useRef([]);

    useEffect(() => {
        let menuItemElements = menuItemRefs.current;

        gsap.timeline({
            defaults: {
                duration: 1,
            },
            scrollTrigger: {
                trigger: menuItemElements[0],
                start: "top center",
                onEnter: ()  => animateMenuItems(menuItemElements)
            }
        })
    }, [])

    function animateMenuItems(menuItemElements) {
        
        return gsap.to(menuItemElements, {
            duration: 0.3,
            xPercent: 110,
            stagger: 0.1,
            ease: 'Power4.out'
        })
    }

    return (
        <section className="section industry">
            <div className="industry__wrapper container">
                <SideText text="industries" />
                <h1 className="industry__title">
                    Industry Solutions.<br /> Be next!
                </h1>
                <Tabs refs={menuItemRefs} className="tabs--industry" menuItems={menuItems} Component={IndustryCard} />
            </div>
            <img src={background} alt="" className="industry__background" />
        </section>

    )
}
