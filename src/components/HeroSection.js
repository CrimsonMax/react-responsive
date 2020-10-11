import React from 'react';
import { Button } from './Button';
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted></video>
            <h1>ПРИКЛЮЧЕНИЯ ЖДУТ</h1>
            <p>Зачем медлить?</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    НАЧАТЬ
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    ПОСМОТРЕТЬ ТРЕЙЛЕР <i className="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection