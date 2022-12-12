import './info.css';
import './estadosDiv.css';
import Wave from './wave';
import GuyServices from './insideDivs/guy-services';
import { motion, AnimatePresence } from 'framer-motion';
import {useState} from 'react';
import ScreenPop from './popUp/animationScreen';
import {TextosPopUp} from './textAndImag/services';
export default function Info() {
  const [open, setOpen] = useState(false); 
  const [text, setText] = useState('');

function addText(value: string) {
 setOpen(open == true ? false : true)
 window.scroll({
  top: 700
 })
 if(value == "services") {
 setText(() => TextosPopUp.text.services)
 } else {
  setText(() => 'oh, deu ruim')
 }
}

 return (
  <motion.article className="infoText" >
   <Wave isTrue={open}/>
   <motion.aside className="infoGrid" variants={variant} animate={open ? 'filter' : ''}> {/* container grid info */}
    <motion.div className="containerServices" variants={variant}
  
    onClick={() => addText('services')}>
     <GuyServices />
    </motion.div> {/* services 1/2 grid */}
     <div className="containerFaculdades"></div> {/* faculdades 2/4 grid */}
      <div className="gapOfInfo"> {/* grid com mais de um item e com flex 1/3 grid container pai */}
        <div className="containerCartoes"></div>
        <div className="containerVip"></div> {/* flex, dentro do grip, RockStar */}
      </div>
     <div className="containerApp"></div> {/* grid footer */}
    <div className="containerPontos"></div> {/* grid footer dois */}
   </motion.aside>
   <AnimatePresence initial={true}>
   {open && 
      <ScreenPop name={text} desable={() => setOpen(!open)}/>
    }
   </AnimatePresence>
      
  </motion.article>
 );
};
const variant = {
  on: {
   width: '90vw',
   scale: 2
  },
  off: {
    scale: 1,
  },
  filter: {
    filter: 'blur(1px)'
  }
}