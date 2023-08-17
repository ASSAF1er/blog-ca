
import '../styles/Description.css'
//import Blog from './Blog'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { NewArticleListContext } from './DataContext'

function Description(){
    const {newArticleList}=useContext(NewArticleListContext)
    const {identifiant} =useParams()
    const idInt=parseInt(identifiant)
    

    return(
        <div className="description">{
            newArticleList.map(({ id, cover, title,categorie,autor,date,pays,drapeau, description} )=>
            (id===idInt)&&(
          <div key={id}>
                <img src={cover} alt={`${title}`} className='img-descrip'/>
                <div className='pays-descrip'>{`${pays}  ${drapeau}`} </div>
                
                <div className='categorie-descrip'>{categorie.toUpperCase()}</div>
                <h2 className='titre-descrip'>{title}</h2>
                <div className='date-descrip'>{date}</div>
                <div className='auteur-descrip'>--{autor}</div>   
                <div className='texte-descrip'>{description}</div>
                <div className='auteur-descrip'>---{autor}</div>
            </div>  ))}

      </div>) }

export default Description 