import './textAnimate.css';
import { motion } from 'framer-motion'
export default function Wave(props: any) {
 return (
  <motion.div className="container-wave" >
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
 )
}

const animateEmphasis = {
  estudante: {
   left: -5,
  },
  empresa: {
   left: 70
  },
  juridica: {
   left: 160
  }
}