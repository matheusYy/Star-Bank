import './animationScreen.css';
import { AnimatePresence, motion } from 'framer-motion'
export default function Animation(props: any) {
 const variant = {
  montead: {
   opacity: 1,
   y: [0, -5]
  }
 }
 return (

  <motion.div className="containerPopUp" 
   initial={{opacity: 0}} 
    animate="montead" 
     exit={{opacity: 0}}
   variants={variant}
     >
   <div className="container-items-pop-up">
    <input type="button" value="" onClick={props.desable}/>
    <div className="childPopUp">
     <p>{props.name}</p>
    </div>
   </div>
  </motion.div>

 )
}