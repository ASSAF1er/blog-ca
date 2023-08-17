
import '../styles/Apercu.css'

function Apercu({description}){
    return(
        <div className="apercu-article">
            <div>{description}</div>
            <button>Lire l'article</button>

        </div>
    )
}
export default Apercu