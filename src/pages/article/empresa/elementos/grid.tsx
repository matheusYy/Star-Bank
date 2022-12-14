import { motion } from 'framer-motion';
import Elements from './elements';
import './grid.css';
export function Grid() {
 return (
 <aside className="grid-empresa">
  <motion.aside
   initial="initial"
   animate="opacityAnimate"
   exit="exit"
   variants={variant}
   className="grid-items-empresa"
  >
  <Elements />
  </motion.aside>
 </aside>
 )
}

const variant = {
   initial: {
    opacity: 0,
   },
   opacityAnimate: {
    opacity: 1,
   },
   exit: {
    opacity: 0,
   }
}
