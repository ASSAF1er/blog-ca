
import '../styles/Menu.css'
import { NavLink} from 'react-router-dom';
function Menu(){
    const titre='Cuisine Africaine & Recettes'
    return(
        <div className="title">
            <nav className='navbar'>
              <div className="title-text"><h1>{titre}</h1></div> 
              <div className="nav-links">
                    <ul>
                        <li  className='active'><NavLink to='/'>Accueil</NavLink>  </li>
                        <li ><NavLink to='/'>Mes Favoris</NavLink> </li>
                        <li ><NavLink to='/'>A Propos</NavLink> </li>
                    </ul>
                    </div> 
                    <div >
                        <button className="btn-application" onClick={(e)=>{e.preventDefault(); window.open('https://play.google.com/store/apps/details?id=cm.seeds.cuisinedafrique&hl=fr&gl=US','_blank')}}>Ouvrir dans l'Application </button>
                    </div>
            </nav>
            
        </div>
    )
}
export default Menu