import './textAnimate.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
export default function Wave(props: any) {

  const [attribute, setAttribute] = useState('');
 function runProps(attribute: string) {
  setAttribute(attribute);
  if(attribute == 'estudante') {
    props.estudanteClick();
  } else if (attribute == 'empresa') {
    props.empresaClick();
  } else if(attribute == 'juridica') (
    props.juridicaClick()
  );
 };
 return (
  <motion.div className="container-wave" >
    <div className="wave" />
    <div className="wave-text">
      <h1 onClick={() => runProps('estudante') }>Estudante</h1>
      <h1 onClick={() => runProps('empresa')}>Empresa</h1>
      <h1 onClick={() => runProps('juridica')}>Pessoa Juridica</h1>
    </div>
      <motion.span 
       className="container-click-wave"
       data-attribute={attribute}
 /*       animate={
        props.animateEstudante ? 'estudante' 
        : props.animateEmpresa ? 'empresa' 
        : props.animateJuridica ? 'juridica' : ''
       }
       variants={animateEmphasis} */
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