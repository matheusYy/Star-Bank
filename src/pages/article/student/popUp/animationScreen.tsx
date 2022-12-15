import './animationScreen.css';
import Services from './services';
import Faculdades from './faculdades';
import Cards from './cards';
import RockStar from './rockstar';
import StarApp from './starApp';
import Pontos from './pontos';
import { motion } from 'framer-motion'
import {X} from './x-desable'
export default function Animation(props: any): JSX.Element {

 const variant = {
  montead: {
   opacity: 1,
   y: [0, -7],
   transition: {
    type: "spring", duration: 0.3
   }
  }
 }
/* teste logico para render de cada elemento da grid */
 function Is(): JSX.Element {
  if (props.faculdade == true) {
    return <Faculdades />
  } else if (props.cards == true) {
    return <Cards />
  } else if (props.rockstar == true) {
    return <RockStar />
  } else if(props.starApp == true) {
    return <StarApp />
  } else if(props.pontos == true) {
    return <Pontos />
  } else if(props.servicos == true) {
    return <Services />
  } else {
    return <h2>Oh, deu algo errado...</h2>
  }
 } 
 return (

  <motion.div 
   data-open="open"
   className="containerPopUp" 
   initial={{opacity: 0}} 
   animate="montead" 
   exit={{opacity: 0}}
   variants={variant}
     >
   <div className="container-items-pop-up">
    <X />
    <span onClick={props.desable} className="container-desable-iconPopUp"/>
    
    <div className="childPopUp">
     {
      Is()
     }
    </div>
   </div>

  </motion.div>

 )
}

