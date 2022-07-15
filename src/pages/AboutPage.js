import React from 'react'
import Template from '../components/Template';
import image from "../icon/ap-banner.png";
import "../style/AboutPage.css";
import Collapse from '../components/Collapse2';

function AboutPage(){

    return(
        <div>
            <div className='div-banner'>
                <img alt="Bannière" className='img-banner' src={image} />
            </div>
            <div className='div-coll'><Collapse title={"Fiabilité"} description="Les annonces postées sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." /></div>
            <div className='div-coll'><Collapse title={"Respect"} description="La bienveillance fait parties des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme." /></div>    
            <div className='div-coll'><Collapse title={"Service"} description="Nos équipes se tiennent à votre disposition pour vous fournir
             une expérience parfaite" /></div>  
            <div className='div-coll'><Collapse title={"Sécurité"} description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
            les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant 
            une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes" /></div>  
        </div>
      
    )
}

export default AboutPage;