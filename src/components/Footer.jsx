import facebook from '../assets/facebook_logo.png'
import instagram from '../assets/instagram_3955024.png'
import twitter from '../assets/twitter-logo.png'
import '../styles/Footer.css'
function Footer(){

    return(
        
            <div className="pied-page">
            <footer>
                CUISINE AFRICAINE & RECETTES copyRight 2023 | Powered By ASSAF SOFT SOLUTIONS
                SUIVEZ-NOUS
                <img src={facebook} alt="" className='icone-rs' />
                <img src={instagram} alt="" className='icone-rs'/>
                <img src={twitter} alt="" className='icone-rs'/>
           </footer> 
           </div>
        
    )
}
export default Footer