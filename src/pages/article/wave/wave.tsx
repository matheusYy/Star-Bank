import './wave.css';
import { useState, useEffect } from 'react';
import {animate, motion} from 'framer-motion'
export default function Wave(props: any) {
const [estudante, setEstudante] = useState(false)
const [empresa, setEmpresa] = useState(false); 
const [juridica, setJuridica] = useState(false); 
  const variant = {
    filter: {
      filter: "blur(1px)"
    }
  }

console.log(props.animateEstudante)
 return (
  <>
  <div className="waveContainer">
  <motion.div className="container-wave" variants={variant} animate={props.isTrue ? 'filter' : ''}>
    <div className="wave-text">
      <h1 onClick={props.estudanteClick}>Estudante</h1>
      <h1 onClick={props.empresaClick}>Empresa</h1>
      <h1 onClick={props.juricaClick}>Pessoa Juridica</h1>
    </div>
      <motion.span className="container-click-wave"
       animate={
        props.animateEstudante ? 'estudante' 
        : props.animateEmpresa ? 'empresa' 
        : props.animateJuridica ? 'juridica' : ''
       }
       variants={animateEmphasis}
      />
   </motion.div>
  </div>

  </>
 )
}

const animateEmphasis = {
  estudante: {
   left: -5
  },
  empresa: {
   left: 70
  },
  juridica: {
   left: 160
  }
}