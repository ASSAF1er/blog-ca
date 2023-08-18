import facebook from '../assets/facebook_logo.png'
import instagram from '../assets/instagram_3955024.png'
import twitter from '../assets/twitter-logo.png'
import '../styles/Footer.css'
function Footer(){

    return(
        
            <div className="pied-page">
            <footer>
                Cuisine Africaine & Recettes  ©2023 | Powered By <span className='entreprise'>  Assaf Soft Solutions</span> 
               
                <img src={facebook} alt="" className='icone-rs' title='suivez nous sur Facebook'/>
                <img src={instagram} alt="" className='icone-rs' title='suivez nous sur Instagram' />
                <img src={twitter} alt="" className='icone-rs' title='suivez nous sur Twitter'/>
           </footer> 
           </div>
        
    )
}
export default Footer