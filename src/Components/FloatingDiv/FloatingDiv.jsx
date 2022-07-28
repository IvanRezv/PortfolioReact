import React from 'react';
import './FloatingDiv.css'

const FloatingDiv = ({img}) => {
    return (
        <div className="FloatingDiv">
            <img src="{img}" alt=""/>
            <span>
                Web
                <br/>
                Devops
            </span>
        </div>
    )
}

export default FloatingDiv