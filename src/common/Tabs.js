import React from 'react'

export default function Tabs({ className, menuItems, Component }) {
    return (
        <div className={"tabs " + className}>
            <ul className="tabs__menu">
                {menuItems.map(item => {
                    return (
                        <li key={item.id} className="tabs__menu-item">
                            <button className="tabs__menu-button">
                                <div className="tabs__menu-icon" />
                                <p className="tabs__menu-text">{item.title}</p>
                            </button>
                        </li>
                    );
                })}
            </ul>
            <ul className="tabs__wrapper">
                <li className="tabs__item">
                    <Component />
                </li>
            </ul>
        </div>
    )
}
