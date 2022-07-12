import '../style/Banner.css'
import image from "../icon/kasa-icon.png";
import { Link } from 'react-router-dom';

function Banner(){
    return (
        <header className="header">
            <Link className="divImage" to={"/"}><div><img className='kasa-icon' src={image} /></div></Link>           
            <div className="divNav">
                <Link className='navTitle' to={"/"}><h2 className='accueil-title'>Accueil</h2></Link>
                <Link className='navTitle' to={"/A-propos"}><h2 className='apropos-title'>A Propos</h2></Link>               
            </div>

        </header>
    )

}

export default Banner