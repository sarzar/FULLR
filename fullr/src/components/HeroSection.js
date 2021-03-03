import React from 'react'
import {Button} from './Button';
import './HeroSection.css';
import "../App.css";

function HeroSection() {
    return (
        <div className = "hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>FULLR</h1>
            <p>Help Now!</p>
            <div className= "hero-btns">
                <Button className = "btns" buttonStyle = "btn--outline" buttonSize = "btn--large">Sign Up</Button>
                <Button className = "btns" buttonStyle = "btn--primary" buttonSize = "btn--large">FAQ <i className="fa-play-circle" /> </Button>
            </div>
        </div>
    )
}

export default HeroSection
