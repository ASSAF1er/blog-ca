
import couverture from '../assets/photo_couverture1.png'
import '../styles/Couverture.css'
function Couverture(){
    return(<div>
   
         <div className="couverture">
           
            <div className='texte'>
            <div className="texte-gras">
                Des <span style={{color:'#ff895bef'}}>Recettes</span> écrites par des chefs cuisiniers chevronnés 
                d'Afrique et des <span style={{color:'#ff895bef'}}>Astuces</span> à vous couper le souffle
            </div>
            <div className="texte-normal">
                C'est encore mieux dans l'application, là vous pourrez
                <div className="slider">
                    <p>Commander des ingrédients</p>
                    <p>Avoir des plans de repas sur 7 jours</p>
                    <p>Recevoir des plans de recettes</p>
                    <p>Etre notifiés sur des recettes</p>
                    <p>Commander des repas</p>
                </div>
               
            </div>                <button className="btn-telecharger" onClick={(e)=>{e.preventDefault(); window.open('https://play.google.com/store/apps/details?id=cm.seeds.cuisinedafrique&hl=fr&gl=US','_blank')}}>Télécharger l'Application </button>
</div>
            <img src={couverture} alt="couverture" className='img-couverture' />
        </div></div>
    )
}
export default Couverture