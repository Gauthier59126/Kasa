import React, { useEffect, useRef, useState } from 'react'
import "../style/Collapse2.css"

import chevronUp from "../icon/ChevronUp.png";
import chevronDown from "../icon/ChevronDown.png"
import userEvent from '@testing-library/user-event';

function Collapse2(props){

    const [active, setActive] = useState(false)

    return (

        <div className='faq-container page'>
            <div className={`faq ${active?"active":''}`}> 
                <h3 className='faq-title' onClick={()=>{setActive(!active)}}>{props.title}</h3>
                <p className='faq-text'>{props.description}</p>
                <button  className='faq-toggle'>
                    <img  className='chevronD modif' src={chevronDown} alt="chevron-down"/>
                    <img className='chevronU modif' src={chevronUp} alt="chevron-up"/>
                </button>
            </div>
        </div>
    )
}

export default Collapse2