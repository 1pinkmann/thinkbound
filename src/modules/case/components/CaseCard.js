import React from 'react'

export default function CaseCard({item}) {
    return (
        <a href={item.href} className="card card--case" style={{ backgroundImage: `url(${item.bg})` }}>
            <div className="card__wrapper">
                <p className="card__text">{item.text}</p>
                <h2 className="card__title">{item.title}</h2>
                <button className="card__link">
                    <span className="card__link-text">View Case Study</span>
                    <div className="arrow" />
                </button>
            </div>
        </a>
    )
}
