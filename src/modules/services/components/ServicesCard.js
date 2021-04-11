import React from 'react'

export default function ServicesCard({item }) {
    return (
        <li className={"services__card "}>
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
