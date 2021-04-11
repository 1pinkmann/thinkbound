import React from 'react'

export default function LadderText({ className, text, refs}) {

    let textArr = text.split(' ');

    return (
        <p className={className}>
            {textArr.map((item, i) => {
                return (
                    <span key={item + i} className="text-mask">
                        <span ref={el => refs.current.push(el)}>{item + ' '}</span>
                    </span>
                );
            })}
        </p>
    )
}
