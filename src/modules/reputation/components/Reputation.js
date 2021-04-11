import React, { useEffect, useRef, useState } from 'react';
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

    const [textLine, setTextLine] = useState(false);

    let textRefs = useRef([]);

    useEffect(() => {

        let textElements = textRefs.current;

        // let currentTl = gsap.timeline({
        //     defaults: {
        //         duration: 1,
        //         ease: 'none'
        //     }
        // });

        ScrollTrigger.create({
            start: textElements[0].getBoundingClientRect().top / 1.5,
            // toggleClass: {
            //     targets: textElements,
            //     className: 'animation-out'
            // },
            onEnter: () => textLineAnim(textElements)
        })

        // textElements.forEach((element, i) => {

        //     gsap
        //         .set(element, {
        //             delay: i * 2,
        //             scrollTrigger: {
        //                 trigger: textElements,
        //                 start: 'top center',
        //                 end: 'bottom top',
        //                 toggleClass: {
        //                     targets: element,
        //                     className: 'animation-out'
        //                 }
        //             }
        //         }, i * 2)

        // })
    }, [])

    function textLineAnim(textElements) {
        textElements.forEach(element => {
            element.classList.add('animation-out');
            
            setTimeout(() => {
                element.classList.remove('animation-out'); 
            }, 500);
        });
    }

    return (
        <section className="section reputation">
            <Particles params={Params} className="particles particles--reputation" />
            <div className="reputation__wrapper container">
                <SideText text='reputation' />
                <div className="reputation__text">
                    <div className={"reputation__text-row" + (textLine ? " animation-out" : "")} ref={el => textRefs.current.push(el)}>We develop innovative digitial solutions</div>
                    <div className={"reputation__text-row" + (textLine ? " animation-out" : "")} ref={el => textRefs.current.push(el)}>for your organization’s transformational success</div>
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
