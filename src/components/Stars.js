import React, { useState } from 'react'
import "../style/Tag.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Star(props){    

    function Rate (){

        const rates = [];

        for (let index = 0; index < props.rating; index++) {
            rates.push(<FontAwesomeIcon key={index} size="2x"  icon={faStar} />)            
        }

        for (let index = props.rating; index < 5; index++) {
            rates.push(<FontAwesomeIcon key={index} size="2x" color='grey'  icon={faStar} />)            
        }
        return rates
    }

    return (
        <div className="div-star">
            <Rate />
        </div>
    )
}

export default Star