
import '../styles/BlogList.css'
import Blog from './Blog'
import Categories from './Categories'
import Couverture from './Couverture'

import { useState, useContext } from 'react'
import { NewArticleListContext } from './DataContext'


function BlogList(){
  
    const {newArticleList}=useContext(NewArticleListContext)
    const [thisCategory,  setThisCategory]=useState('Tous')
    
    function upperFirst(str){
        return(str.charAt(0).toUpperCase()+str.toLowerCase().slice(1))}

    return(
    <div className="blog-list-container">
        <Couverture/>
        <Categories setThisCategory={setThisCategory}/>
      
        {
           newArticleList.map(({id,cover,title,categorie,autor,date,pays,drapeau, description})=>
            ( thisCategory === upperFirst(categorie) || thisCategory==='Tous')&&( 
                <div key={title}>
                    <Blog 
                    cover={cover}
                    title={title}
                    categorie={categorie}
                    autor={autor}
                    date={date}
                    pays={pays}
                    drapeau={drapeau}
                    description={description}
                    id={id}
                    />
                    
                </div> 
            ))
        }
        
        
    </div>
        
    )
}
export default BlogList