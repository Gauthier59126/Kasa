import React from 'react'
import {getData} from "../services/services";
import Template from "../components/Template";
import ImageGallery from "../components/ImageGallery"

function HomePage(){
    const data = getData()
    return (
        <div>
            <div className="div-home">
                <Template/>
                <ImageGallery logements={data}/>
            </div>
        </div>
    )
}

export default HomePage