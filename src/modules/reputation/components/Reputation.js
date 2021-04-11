import React, { useEffect, useRef} from 'react';
import Particles from 'react-particles-js';

import SideText from '../../../common/SideText';
import circle from '../../../images/reputation/circle.png';
import img1 from '../../../images/reputation/img1.png';
import img2 from '../../../images/reputation/img2.png';
import img3 from '../../../images/reputation/img3.png';
import img4 from '../../../images/reputation/img4.png';

import Params from '../../../particlesParams/particles.json';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Reputation() {

    let textRefs = useRef([]);

    useEffect(() => {
        let textElements = textRefs.current;

        gsap.timeline({
            defaults: {
                duration: 1,
            },
            scrollTrigger: {
                trigger: textElements[0],
                start: "top center",
                onEnter: ()  => animateTextLine(textElements)
            }
        })
    }, [])

    function animateTextLine(textElements) {
        
        return gsap.set(textElements, {
            duration: 0.3,
            className: 'reputation__text-row animation-out',
            stagger: 0.5,
            ease: 'Power4.out'
        })
    }

    return (
        <section className="section reputation">
            <Particles params={Params} className="particles particles--reputation" />
            <div className="reputation__wrapper container">
                <SideText text='reputation' />
                <div className="reputation__text">
                    <div className="reputation__text-row" ref={el => textRefs.current.push(el)}>We develop innovative digitial solutions</div>
                    <div className="reputation__text-row" ref={el => textRefs.current.push(el)}>for your organization’s transformational success</div>
                </div>
                <h2 className="reputation__title">Top Rated Amongst Industry Experts</h2>
                <img src={circle} alt="" className="reputation__circle" />
                <div className="reputation__images">
                    <img src={img1} alt="" className="reputation__image" />
                    <img src={img2} alt="" className="reputation__image" />
                    <img src={img3} alt="" className="reputation__image" />
                    <img src={img4} alt="" className="reputation__image" />
                </div>
            </div>
        </section>
    )
}
