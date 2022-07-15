import "../style/Thumb.css"
import { Link } from "react-router-dom";

function Thumb(props){
    return(
         <Link to={"/logement/" + props.logement.id} className="div-image">
                <img className="red-image" src={props.logement.cover}></img>
                <div className="div-title"><h3 className="rent-title" >
                {props.logement.title}</h3></div>                
        </Link>
)
}

export default Thumb