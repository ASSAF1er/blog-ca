
import couverture from '../assets/img-couverture.jpg'
import '../styles/Couverture.css'
function Couverture(){
    return(
        <div className="couverture">
            <div className='texte'>
            <div className="texte-gras">
                Des <span style={{color:'#ff895bef'}}>Recettes</span> écrites par des chefs cuisiniers chevronnés 
                d'Afrique et des <span style={{color:'#ff895bef'}}>Astuces</span> à vous couper le souffle
            </div>
            <div className="texte-normal">
                Dans l'Application vous pourrez
                <div className="slider">
                    <p>Commander des ingrédients</p>
                    <p>avoir des plans de repas sur 7 jours</p>
                    <p>recevoir des plans de recettes</p>
                    <p>etre notifiés sur des recettes</p>
                    <p>commander des repas</p>
                </div>
               
                <button className="btn-telecharger" onClick={(e)=>{e.preventDefault(); window.open('https://play.google.com/store/apps/details?id=cm.seeds.cuisinedafrique&hl=fr&gl=US','_blank')}}>Télécharger l'Application </button>
            </div></div>
            <img src={couverture} alt="couverture" className='img-couverture' />
        </div>
    )
}
export default Couverture