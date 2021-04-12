import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesCard({ item, refs }) {

    return (
        <li ref={el => refs.current.push(el)} className={"services__card "}>
            <div className="services__card-icon">
                <img src={item.icon} alt="" className="services__card-image" />
            </div>
            <h1 className="services__card-title">{item.title}</h1>
            <ul className="services__card-list">
                {item.items.map(itemText => {
                    return (
                        <li key={itemText.id} className="services__card-item arrow-hover">
                            <a href="/" className="services__card-link">{itemText.title}</a>
                            <div className="arrow" />
                        </li>
                    );
                })}
            </ul>
        </li>
    )
}
