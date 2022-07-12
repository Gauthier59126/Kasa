import React from 'react'
import "../style/Collapse.css"

function Collapse(props){
    return(        
        <div className='conteneur-collapse'>
            <div className='wrapper'>
                <div className='collapsible'>
                    <input type="checkbox" id='collapsible-head1'></input>
                    <label for="collapsible-head1">{props.title}</label>
                    <div className='collapsible-text'>
                        <p> {props.description} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collapse;