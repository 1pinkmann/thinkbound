import React, { useEffect, useRef } from 'react'
import Button from '../../../common/Button'
import thinkboungLogo from '../../../icons/thinkbound.png'
import gear from '../../../icons/gear.png'
import video from '../../../video/video.mp4'

import gsap from 'gsap';
import LadderText from '../../../common/LadderText'

export default function Banner() {

    const titleMasks = useRef([]);
    const titleTexts = useRef([]);
    const ladderTexts = useRef([]);

    useEffect(() => {
        let titleMasksElements = titleMasks.current;
        let titleTextsElements = titleTexts.current;
        let ladderTextsElements = ladderTexts.current;

        initBannerTextAnimation({titleMasksElements, titleTextsElements, ladderTextsElements});
    }, [])

    return (
        <section className="banner">
            <video className="video" autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4" />
            </video>
            <div className="banner__wrapper container">
                <h1 className="banner__title">
                    <div ref={el => titleMasks.current.push(el)} className="banner__title-text-mask">
                        <div ref={el => titleTexts.current.push(el)} className="banner__title-text">get to</div>
                    </div>
                    <div ref={el => titleMasks.current.push(el)} className="banner__title-text-mask">
                        <div ref={el => titleTexts.current.push(el)} className="banner__title-text banner__title-text--blue">breakthrough</div>
                    </div>
                </h1>
                <LadderText
                    refs={ladderTexts}
                    className="banner__text"
                    text="We break through boundaries your organization faces in an  everchanging world "
                />
                <div className="banner__buttons">
                    <Button className='banner__button' type='link' icon={thinkboungLogo} text='Start project' href='#' />
                    <Button className='banner__button button--white' type='link' icon={gear} text='View all Services' href='#' />
                </div>
            </div>
        </section>

    )
}

function initBannerTextAnimation({titleMasksElements, titleTextsElements, ladderTextsElements}) {


    let textTl = gsap.timeline({
        defaults: {
            duration: 0.7,
            ease: 'Power4.in'
        },
        delay: 0.5
    });

    textTl
        .from(titleTextsElements, {
            yPercent: 100, stagger: 0.1
        }, 0)
        .to(titleTextsElements, {
            yPercent: -4, stagger: 0.1
        }, 0)
        .from(titleMasksElements, {
            yPercent: -46, stagger: 0.1
        }, 0)

    let ladderTl = gsap.timeline({
        defaults: {
            duration: 0.2,
            ease: 'Power4.in'
        }
    });

    ladderTl.from(ladderTextsElements, {
        yPercent: 100,
        stagger: 0.1
    })

    let bannerTl = gsap.timeline();

    bannerTl
        .add(textTl)
        .add(ladderTl);
}
