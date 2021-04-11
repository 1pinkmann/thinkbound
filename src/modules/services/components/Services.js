import React from 'react';
import SideText from '../../../common/SideText';

import pc from '../../../icons/pc.png';
import optimization from '../../../icons/optimization.png';
import applications from '../../../icons/applications.png';
import marketing from '../../../icons/marketing.png';
import ServicesCard from './ServicesCard';

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
    return (
        <section className="section services container">
            <SideText text='services'/>
            <div className="services__text-wrapper">
                <div className="services__text services__text--small">Our Services</div>
                <div className="services__text">Break through with Thinkbound Services</div>
            </div>
            <ul className="services__cards">
               {servicesCards.map(item => {
                   return <ServicesCard key={item.id} item={item} />
               })}
            </ul>
        </section>

    )
}
