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
                <div className='head' onClick={()=>{setActive(!active)}}> 
                    <h3 className='faq-title'>{props.title}</h3>
                    <button  className='faq-toggle'>
                        <img  className='chevronD modif' src={active? chevronUp : chevronDown} alt= {active?"chevronUp ": "chevronDown"}/>
                        { /* <img className='chevronD up modif' src={chevronUp} alt="chevron-up"/>*/}
                    </button>
                </div>
                
                <p className='faq-text'>{props.description}</p>

            </div>
        </div>
    )
}

export default Collapse2