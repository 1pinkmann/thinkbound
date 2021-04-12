import React from 'react'

export default function SideText({text, modificator, sideTextRef}) {
    return (
        <div ref={sideTextRef} className={"side-text" + (modificator ? " side-text--" + modificator : "")}>{text}</div>
    )
}

