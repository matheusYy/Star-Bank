import './wave.css';
import {motion} from 'framer-motion'
export default function Wave(props: any) {
  const variant = {
    filter: {
      filter: "blur(1px)"
    }
  }
 return (
  <>
  <div className="waveContainer">
  <motion.div className="waveText" variants={variant} animate={props.isTrue ? 'filter' : ''}>
    <h1>Estudante</h1>
     <h1>Empresa</h1>
      <h1>Pessoa Juridica</h1>
   </motion.div>
  </div>

  </>
 )
}