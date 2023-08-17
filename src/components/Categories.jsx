import { useContext } from 'react'
import { NewArticleListContext } from './DataContext'
import '../styles/categories.css'


function Categories({setThisCategory}){

 const {newArticleList}=useContext(NewArticleListContext)
    
 function upperFirst(str){
        return(str.charAt(0).toUpperCase()+str.toLowerCase().slice(1))
    }

    const categs=newArticleList.reduce((acc,article)=>acc.includes(upperFirst(article.categorie))?  acc:
    acc.concat(upperFirst(article.categorie)),['Tous'])

    return(
        <div className="blog-categories">
            {
                categs.map((cat)=>(
                    <div className="category" key={cat} onClick={()=>setThisCategory(cat)}>{upperFirst(cat)}</div>
                ))
            }
            
           
        </div>
    )
}
export default Categories