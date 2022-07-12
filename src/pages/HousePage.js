import React from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from '../components/Slider'
import { getHouseData } from '../services/services'
import "../style/HousePage.css"
import Collapse from '../components/Collapse2';
import Tag from '../components/Tag';
import Star from '../components/Stars';

function HousePage(props) {
    const params = useParams()
    const data = getHouseData(params.id)

    return (
    <div className='div-housepage'>        
        <div className='div-slider'>
            <Slideshow pictures= {data.pictures}/>
        </div> 

        <div className='div-description'>
            <div className='div-title-location'>
                <div className='div-title1'>{data.title}</div>
                <div className='div-location'>{data.location}</div>
            </div>    
            <div className='div-host'>
                <div className='host-name'>{data.host.name}</div> 
                <div className='host-image'><img className='profile-pic' src={data.host.picture}></img></div>
            </div>
        </div>   
        <div className='div-tags-stars'>
            <div className='div-tags'>
                {data.tags.map((tag) =>{
                return <Tag tag={tag}/>
                })}
            </div>
            <div className='div-stars'>
                <Star rating={data.rating}/>
            </div>
        </div>    
        <div className='div-description-equipment'>
            <div className='div-description'><Collapse title={"Description"} description={data.description}/></div>
            <div className='div-equipement'><Collapse title={"Equipements"} description={data.equipments}/></div>    
            
        </div>
    </div>

    )
}

export default HousePage