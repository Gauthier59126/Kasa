import '../style/ImageGallery.css'
import Thumb from './Thumb'

function Gallery(props){

    return (
        <div className="conteneur">
            {props.logements.map((logement, e) =>{
               return <Thumb  key={e}  logement={logement}/>
            })}
        </div>
    )
}

export default Gallery