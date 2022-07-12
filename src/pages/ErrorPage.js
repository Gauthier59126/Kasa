import React from 'react'
import "../style/ErrorPage.css"
import { Link } from 'react-router-dom';

function ErrorPage (){
    return(
        <div>
            <div className="error-conteneur">
                <h1 className="error">404</h1>
                <h2 className="error-message">Oups ! La page que vous demandez n'existe pas</h2>
                <Link className='home-link' to={"/"}>Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}

export default ErrorPage