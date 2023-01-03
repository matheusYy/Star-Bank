import './apresentation.css';
import './apresentationTwo.css';
import RetangleIcon from './fragmentos/retangleIcon';
import CompartilheContent from './fragmentos/compartilheContent';
import Social from './fragmentos/social';
// lines decoration
import { useState } from 'react';
import { motion } from 'framer-motion';

/* wave  */
import Wave from './wave';
export default function Apresentation() {
  const [heart, setHeart] = useState('');
  function like() {
   setHeart(heart == '#000' ? "#ff0202" : "#000"); 
  }
 return (
  <aside className="containerGridApresentation">
   <div><strong>STAR BANK</strong></div>
   <div><strong>NOVIDADES</strong>
    <svg xmlns="http://www.w3.org/2000/svg" onClick={like} className='heart-svg' viewBox="0 0 24 24" width="25" height="25"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" fill={heart}/></svg>
   </div>
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