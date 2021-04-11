import React from 'react'
import Button from '../../../common/Button'
import thinkboungLogo from '../../../icons/thinkbound.png'
import gear from '../../../icons/gear.png'
import video from '../../../video/video.mp4'

export default function Banner() {
    return (
        <section className="banner">
            <video className="video" autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4" />
            </video>
            <div className="banner__wrapper container">
                <h1 className="banner__title">
                    <div className="banner__title-text">get to</div>
                    <div className="banner__title-text banner__title-text--blue">breakthrough</div>
                </h1>
                <p className="banner__text">
                    We break through boundaries your organization faces
                    in an everchanging world
                </p>
                <div className="banner__buttons">
                    <Button className='banner__button' type='link' icon={thinkboungLogo} text='Start project' href='#'/>
                    <Button className='banner__button button--white' type='link' icon={gear} text='View all Services' href='#'/>
                </div>
            </div>
        </section>

    )
}
