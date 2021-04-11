import React from 'react'

export default function Button({type, href, className, icon, text, textClass}) {

    if (type === 'button') {
        return (
            <button className={"button" + className}>
                {icon ? <img src={icon} alt="" className="button__icon" /> : null} 
                <div className="button__text">{text}</div>
            </button>
        )
    } else if (type === 'link') {
        return (
            <a href={href} className={"button " + className}>
                {icon ? <img src={icon} alt="" className="button__icon" /> : null}      
                <div className={"button__text " + textClass}>{text}</div>
            </a>
        )
    }
}
