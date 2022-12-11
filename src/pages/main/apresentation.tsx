import './apresentation.css';
import './apresentationTwo.css';
import RetangleIcon from './fragmentos/retangleIcon';
import CompartilheContent from './fragmentos/compartilheContent';
import Social from './fragmentos/social';
export default function Apresentaition() {
 return (
  <aside className="containerGridApresentation">
   <div><strong>STAR BANK</strong></div>
   <div><strong>NOVIDADES</strong><span className="iconHeart"></span></div>
   <div className="containerIconDiv">
    <RetangleIcon /> {/* retangulos em midia */}
    <span className="textForContainerIcon">
     <strong>MIDIA</strong>
     <p>Lembranças dos nossos eventos compartilhe
      seu momento star
      com a gente tambem
     </p>
    </span>
   </div>
   <div className="eventosContent"><strong>EVENTOS</strong></div> {/* retangulo a direita grid */}
   <div></div> {/* svg linhas pretas */}
   <div>
    <aside>
     <p>Hey, dê uma olhada nas nossas redes sociais</p>
    </aside>
    <Social />
   </div>
   <div className="participeContent">
    <strong>PARTICIPE</strong>
    <CompartilheContent /> 
  </div>
  </aside>
 )
}