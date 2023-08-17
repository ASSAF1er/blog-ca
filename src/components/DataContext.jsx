import { createContext,useState } from "react";
import { articleList } from "../datas/articleList";

export const NewArticleListContext=createContext('')

 const ArticleListProvider=({children})=>{
    const [newArticleList,setNewArticleList] = useState(articleList)
    return(
        <NewArticleListContext.Provider value={{newArticleList,setNewArticleList}}>
            {children}
        </NewArticleListContext.Provider>
    )
}
export default ArticleListProvider
