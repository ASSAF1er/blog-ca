

import { useState } from "react"
 import coeur_rouge from "../assets/coeur_rouge.png"
import coeur_blanc from  "../assets/coeur_blanc.png"
import { Link } from "react-router-dom"

import '../styles/Blog.css'

function Blog({id,cover,title,categorie,autor,date,pays,drapeau ,description}){

    const [favori, setFavori]=useState(false)
    

    return(
        <div className='blog-container'>
            
            <li className="blog" key={id}>
                <img src={cover} alt={title} className='cover-image'/>
                <div className="pays-recette">{`${pays.toUpperCase()} ${drapeau}`}  </div>
                <div className='categorie-blog'> {categorie.toUpperCase()}</div>
                    <div onClick={()=>favori ? (setFavori(false)):(setFavori(true))}>
                        {
                            favori ? (<img className='icone-coeur-rouge' src={coeur_rouge} alt="icone" />):
                        (<img className='icone-coeur-blanc' src={coeur_blanc} alt="icone" title="Ajouter aux Favoris"/>)
                        }
                    </div>
                    
                    <div className="titre-blog">
                        <h2>{title}</h2>

                        <div className="date-blog">{date}</div>
                        <div className="auteur-blog">{`- ${autor}`}</div>
                     </div>

                     <div className="apercu-article">
                        <div>{description.substr(0,160)+ ' ...'}</div>
                        <Link to={`/description/${id}`} ><button >Lire l'article</button></Link> 
                     </div>

        
                
            </li> 

           
        </div>
    )
}
export default Blog