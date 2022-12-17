import './mainInfo.css';
import './estadosDiv.css';
import { motion, AnimatePresence, useScroll  } from 'framer-motion';
import {useState} from 'react';
import ScreenPop from './popUp/animationScreen';
import Template from './insideDivs/template';
/* estilos */
import './insideDivs/services.css';
import './insideDivs/faculdades.css';
import './insideDivs/cards.css';
import './insideDivs/rock-star.css';
import './insideDivs/star-app.css';
import './insideDivs/pontos.css';

export function Estudante(props: any): JSX.Element {
  const [open, setOpen] = useState(false);  /* valores para abrir e fechar o popUp */
  /* teste para render de cada grid template */
  const [servicos, setServicos] = useState(false);
  const [faculdade, setFaculdade] = useState(false);
  const [cards, setCards] = useState(false);
  const [rockstar, setRockStar] = useState(false);
  const [StarApp, setStarApp] = useState(false);
  const [pontos, setPontos] = useState(false);

  if(open) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
function Click
(
  servicos: boolean, 
  faculdade: boolean, 
  cards: boolean, 
  rockstar: boolean, 
  StarApp: boolean, 
  pontos: boolean
){
    setOpen(open == true ? false : true) 
    setServicos(servicos);
    setFaculdade(faculdade);
    setCards(cards);
    setRockStar(rockstar);
    setStarApp(StarApp); 
    setPontos(pontos);
}


function reset() {
  setOpen(!open);
  setServicos(false);
  setFaculdade(false);
  setCards(false);
  setRockStar(false);
  setStarApp(false);
  setPontos(false);
}
 return (
  <aside className="container-pai-grid-estudante">{/* article pai container */}
   <motion.aside /* container grid */
     className="infoGrid" 
     variants={variant} 
     initial={{opacity: 0}}
     animate={["animated"]}
     exit={{opacity: 0}}> {/* container grid info */}
    <div className="containerServices">
    <Template 
      estilo="services-container" 
      imagem="image-services" 
      texto="Serviços Star-Bank" 
      titulo="Services"
      click={() => Click(true, false, false, false, false, false)}/>  
    </div> {/* services 1/2 grid */}
    <div className="containerFaculdades">
     <Template 
      estilo="faculdade-container" 
      imagem="image-faculdade" 
      texto="Veja as faculdades disponivies pera você receber cashback" 
      titulo="Faculdades"
      click={() => Click(false, true, false, false, false, false)}/>  
  {/* click é a props que roda um onclick em template.tsx */}
    </div> {/* faculdades 2/4 grid */}
      <div className="gapOfInfo"> {/* grid com mais de um item e com flex 1/3 grid container pai */}
        <div className="containerCartoes">
        <Template 
          estilo="cards-container" 
          imagem="image-cards" 
          texto="Todas as cores que você pode escolher para seu cartão" 
          titulo="Cards"
          click={() => Click(false, false, true, false, false, false)}/>  
          
        </div>
        <div className="containerVip">
        <Template 
          estilo="rock-star-container" 
          imagem="image-rock-star" 
          texto="Cartão exclusivo da StarBank, tenha o seu star-gold exclusivo" 
          titulo="RockStar"
          click={() => Click(false, false, false, true, false, false)}/>  
             
        </div> {/* flex, dentro do grip, RockStar */}
      </div>
     <div className="containerApp">
     <Template 
      estilo="app-container" 
      imagem="image-app" 
      texto="Tenha tudo em mãos com star-app" 
      titulo="Star App"
      click={() => Click(false, false, false, false, true, false)}/>    
     </div> {/* grid footer */}
    <div className="containerPontos">
    <Template 
      estilo="pontos-container" 
      imagem="image-pontos" 
      texto="Ganhe pontos fazendo compras" 
      titulo="Pontos"
      click={() => Click(false, false, false, false, true, true)}/>      
    </div> {/* grid footer dois */}
   </motion.aside>
   <AnimatePresence initial={true}>
   {open && 
      <ScreenPop 
      servicos={servicos}
      faculdade={faculdade} 
      cards={cards}
      rockstar={rockstar}
      starApp={StarApp}
      pontos={pontos}
      desable={reset}
      />
   }
   </AnimatePresence>    
  </aside>
 );
};
const variant = {
  animated: {
   opacity: 1,
  }
}



