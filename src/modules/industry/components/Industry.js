import React from 'react'
import SideText from '../../../common/SideText';
import Tabs from '../../../common/Tabs';

import background from '../../../images/industry/expanding-bg.png';
import IndustryCard from './IndustryCard';

let menuItems = [
    {title: 'Self Storage', id: 1},
    {title: 'Arts Culture', id: 2},
    {title: 'Hospitality', id: 3}
]

export default function Industry() {
    return (
        <section className="section industry">
            <div className="industry__wrapper container">
                <SideText text="industries" />
                <h1 className="industry__title">
                    Industry Solutions.<br /> Be next!
                </h1>
                <Tabs className="tabs--industry" menuItems={menuItems} Component={IndustryCard} />
            </div>
            <img src={background} alt="" className="industry__background" />
        </section>

    )
}
