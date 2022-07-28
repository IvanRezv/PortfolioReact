import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from "../Card/Card";
import Resume from './resume.pdf';


const Services = () => {
    return (
        <div className="services">
            <div className="awesome">
            <span> My awesome app</span>
            <span>services</span>
            <spane> Here are a lot of text and breakdown
                <br />
                and here are in continued
            </spane>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right site */}
            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {'Figma,Sketch,PH, etc'}
                    />
                </div>
            {/* second card */}
                <div style={{top: '12rem', left: '-4rem'}}>
                    <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {'HTML, CSS, DJANGO, REACT'}
                    />
                </div>
            {/* 3rd card */}
                <div style={{top: '19rem', left: '12rem'}}>
                    <Card
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {'Interface development'}
                    />
                </div>
            <div classNam="blur s-blur2" style={{ background: 'var(--purple)'}}></div>
            </div>
        </div>
    );
};

export default Services