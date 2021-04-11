import React from 'react'
import Button from '../../../common/Button'

import thinkboungLogo from '../../../icons/thinkbound.png'
import logo from '../../../images/logo/logo.png'

export default function Header() {
    return (
        <header className="header">
            <div className="header__wrapper container container--header">
                <a href="/" className="logo">
                    <img src={logo} alt="" className="logo__image" />
                </a>
                <ul className="header__menu">
                    <li className="header__menu-item">
                        <a href="/" className="header__menu-link active">Home</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="/" className="header__menu-link">About</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="/" className="header__menu-link">Services</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="/" className="header__menu-link">Industry Success</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="/" className="header__menu-link">Showcase</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="/" className="header__menu-link">Contact</a>
                    </li>
                </ul>
                <Button type='link' icon={thinkboungLogo} href="" className="header__button" text="Start project"/>
            </div> 
        </header>

    )
}
