import React from 'react';
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";


const Intro = () => {
    return (
        <div className="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span> Hi! I'm Ivan</span>
                    <span> Ivan Rezvetsov</span>
                    <span>Devops Engineer bla bla bla
                    </span>
                </div>

                <button className="button i-button">Hire me</button>

            <div className="i-icons">
                <a href="https://github.com/">
                <img src={Github} alt=""/>
                </a>
                <img src={LinkedIn} alt=""/>
                <img src={Instagram} alt=""/>
            </div>

            </div>
            <div className="i-right">

           <img src={Vector1} alt=""/>
           <img src={Vector2} alt=""/>
           <img src={boy} alt=""/>
            <div>
                <FloatingDiv image={thumbup}/>
            </div>
            </div>
        </div>
    )
}

export default Intro