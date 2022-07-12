import React from 'react'
import "../style/Tag.css"

function Tag(props){

    return (
        <div className="div-tag">
            <h3 className='tag-title'>{props.tag} </h3>
        </div>
    )
}

export default Tag