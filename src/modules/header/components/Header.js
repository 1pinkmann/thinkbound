import React, { useEffect, useRef } from 'react';
import Button from '../../../common/Button';

import thinkboungLogo from '../../../icons/thinkbound.png';
import logo from '../../../images/logo/logo.png';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let navLinks = [
    { title: 'Home', id: 1 },
    { title: 'About', id: 2 },
    { title: 'Services', id: 3 },
    { title: 'Industry Success', id: 4 },
    { title: 'Showcase', id: 5 },
    { title: 'Contact', id: 6 }
]

export default function Header() {

    const itemsRef = useRef([]);

    useEffect(() => {
        let links = itemsRef.current;

        ScrollTrigger.create({
            start: 100,
            end: 'bottom',
            toggleClass: {
                targets: '.header',
                className: 'has-scrolled'
            },
            onEnter: ({ direction }) => navAnimation(links, direction),
            onLeaveBack: ({ direction }) => navAnimation(links, direction)
        })
    }, [])

    return (
        <header className="header">
            <div className="header__wrapper container container--header">
                <a href="/" className="logo">
                    <img src={logo} alt="" className="logo__image" />
                </a>
                <ul className="header__menu">
                    {navLinks.map((item, i) => {
                        return (
                            <li ref={el => itemsRef.current.push(el)} key={item.id} className="header__menu-item">
                                <a href="/" className={"header__menu-link" + (i === 0 ? " active" : "")}>{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
                <Button type='link' icon={thinkboungLogo} href="" className="header__button" text="Start project" />
            </div>
        </header>
    )
}

function navAnimation(links, direction) {
    const down = direction === 1;
    return gsap.to(links, {
        duration: 0.3,
        stagger: 0.05,
        autoAlpha: () => down ? 0 : 1,
        y: () => down ? 20 : 0,
        ease: 'Power4.out'
    })
}
