import '../style/Footer.css'
import image from "../icon/white-kasa-icon.png";

function Footer() {
    return(
        <footer>
            <div className='divIcone'><img className='white-kasa-icon' src={image} /></div>
            <div className='divCopyright'> 2020 Kasa, All rights reserved</div>
        </footer>
    )
}

export default Footer