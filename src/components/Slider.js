import React, { useState } from 'react'
import "../style/Slider.css"
import image from "../icon/hp-banner.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slideshow = (props) => {

    const [index, setIndex] = useState(0);
    console.log(props)

    function next()  {

        if (index == props.pictures.length -1) {
            setIndex(0)
        } else{
            setIndex(index +1)
        }        
        console.log(index)        
    }

    function prev () {

        if (index == 0) {
            setIndex(props.pictures.length -1)
        }else{
            setIndex(index -1)
        }
        console.log(index)
    }

    return (
        <div className="containerSlide">
                <div className="lightbox" id="img1">
                    {props.pictures.length >1? <a className='prev light-btn btn-prev' onClick={prev} href="#img3">
                        <FontAwesomeIcon className='prev' icon={faChevronLeft} size="4x" color='white'/></a> : <></>}
                    <div className="contain-img">
                        <img className="lightbox-image" src={props.pictures[index]} alt="Diaporama d'images"/>
                        {props.pictures.length > 1? <h2 className="title"> {index +1}/{props.pictures.length}</h2> : <></> } 
                    </div>                    
                    {props.pictures.length > 1? <a className='next light-btn btn-next' onClick={next} href="#img2">
                      <FontAwesomeIcon className='next' icon={faChevronRight} size="4x" color='white' /></a> : <></>}
                </div>
        </div>
    )
}

export default Slideshow;

