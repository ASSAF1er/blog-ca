
function ModelDescription({id,cover,title,categorie,autor,date,pays,drapeau ,description}){
    return(
        <div className="description">
        <div key={id}>
                <img src={cover} alt="" />
                <div>{pays}</div>
                <div>{drapeau}</div>
                <div>{categorie}</div>
                <h2>{title}</h2>
                <div>{autor}</div>
                <div>{date}</div>
                <div>{description}</div>
                <div>{autor}</div>
            </div>
            </div>
    )
}
export default ModelDescription