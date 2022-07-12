import image from "../icon/hp-banner.png";
import "../style/Template.css"

function Template(){
    return (
        <div className="div-template">
            <img className="img-template" src={image}></img>
            <h1 className="template-title">Chez vous, partout et ailleurs</h1>
        </div>
    )

}

export default Template