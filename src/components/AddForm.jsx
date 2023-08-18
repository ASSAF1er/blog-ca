import '../styles/AddForm.css'
import { useState,useContext } from 'react'
import { NewArticleListContext } from './DataContext'
function AddForm(){

    const [file, setFile]=useState()
    const handleChange= (e)=>{
        setFile(URL.createObjectURL(e.target.files[0]))
        setCover(URL.createObjectURL(e.target.files[0]))
    }

    const {newArticleList, setNewArticleList}=useContext(NewArticleListContext)
    const  [errors, setErrors]=useState({})
    const handleClick=(e)=>{
        e.preventDefault();

        if(isError(title)){
            setErrors({...errors, title:'Le titre est obligatoire',})
        }
        if(isError(date)){
            setErrors({...errors, date:'La date est obligatoire'})
        }
        if(cover===null){
            setErrors({...errors, cover:'L\'image de couverture est obligatoire'})
        }
        if(isError(category)){
            setErrors({...errors, category:'La catégorie est obligatoire'})
        }
        if(isError(country)){
            setErrors({...errors, country:'Le pays est obligatoire'})
        }
        if(isError(description)){
            setErrors({...errors, description:'La description est obligatoire'})
        }
        if(isError(autor)){
            setErrors({...errors, autor:'Le nom de l\'auteur est obligatoire'})
        }
        if(!isError(title) && !isError(date) && !isError(cover) && 
            !isError(category) && !isError(country) && !isError(description) && !isError(autor))
        {
        setNewArticleList([...newArticleList, {
            id:newArticleList.length+1,
            cover:cover,
            title:title,
            categorie:category ,
            autor:autor,
            date:date,
            pays:country,
            drapeau:'', 
            description:description,
        
        }])
        setTitle('')
        setDate('')
        setCover(null)
        setFile(null)
        setCategory('')
        setCountry('')
        setDescription('')
        setAutor('')
    
     setShowFinish(true)
     setTimeout(()=>{setShowFinish(false)},5000)}
    }   
    const isError=(value)=>{
        if(value===null || value.trim().length=== 0 ){
            return true
        }else{
            return false  
        }
    }
    const [title,setTitle]=useState('')
    const [date,setDate]=useState('')
    const [cover,setCover]=useState()
    const [category,setCategory]=useState('')
    const [country,setCountry]=useState('')
    const [description,setDescription]=useState('')
    const [autor, setAutor]=useState('')
    //fonction qui fait apparaitre la div
    const [showFinish,setShowFinish]=useState(false)
    
    return(
     <div className="add-form">   
        <form action="">
            <h1>Ajouter un nouvel article</h1>

            <label htmlFor="titre">Titre de l'article</label><br />
            <input type="text" id='titre' placeholder='Titre' value={title} className={ errors.title ?'input-error':''} onChange={(e)=>setTitle(e.target.value)} required /><br />
            {errors.title && <p className='error'>{errors.title}</p>}

            <label >Date<br />
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className={ errors.date ?'input-error':''} required/> <br />
            </label>{errors.date && <p className='error'>{errors.date}</p>}

            <label htmlFor="">Heure<br />
            <input type="time" required /><br />
            </label>

            <label>Image de couverture<br />
            <div  className={`${'img-previewer'} ${errors.cover ? 'input-error':''}`}>
                <input type="file" className='img-input' accept='image/*'   onChange={handleChange}/><br />
                <img src={file} alt="" className='img-preview'/><br />
            </div>
            {errors.cover && <p className='error'>{errors.cover}</p>}
           </label>

            <label>Catégorie<br />
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} className={ errors.category?'input-error':''} placeholder=' exemple Recette, Astuce,..'/><br />
            {errors.category && <p className='error'>{errors.category}</p>}
            </label>

            <label>Pays<br />
            <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} className={ errors.country ?'input-error':''} placeholder='Cameroun'/><br />
            {errors.country && <p className='error'>{errors.country}</p>}
            </label>

            <label>Description<br />
            <textarea  type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Tout le texte de votre article ici' className={ errors.description ?'input-error':''}/><br />
            {errors.description && <p className='error'>{errors.description}</p>}
            </label>

            <label>Auteur <br />
            <input type="text"  value={autor} onChange={(e)=>setAutor(e.target.value)} className={ errors.autor ?'input-error':''} placeholder='Votre nom'/><br />
            {errors.autor && <p className='error'>{errors.autor}</p>}
            </label>

            <button type='submit' onClick={handleClick}>Ajouter</button>

        </form>
      { showFinish && <div className={`${'finish-div'} ${showFinish? 'appear':''}`} >
             <p>Nouvel Article ajouté au blog 🎉🎊</p> 
            <p>Vous pouvez aller consulter...✨</p> 
        </div>}
    </div>
)
}
export default AddForm