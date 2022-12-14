import { useState, useEffect } from 'react';
import Wave from './wave/wave';
import {Estudante} from './student/mainInfo';
import Empresa from './empresa/empresa';
import { Juridica } from './juridica/main';
import { AnimatePresence } from 'framer-motion';

export const Main = (): JSX.Element => {
 const [estudante, setEstudante] = useState(false);
 const [empresa, setEmpresa] = useState(false);
 const [juridica, setJuridica] = useState(false);


function WhenClick(estudante: boolean, empresa: boolean, juridica: boolean):void {
  setEstudante(estudante);
  setEmpresa(empresa);
  setJuridica(juridica);
}
 
useEffect(() => {
 setEstudante(true);
}, [])

 return (
 <>
  <Wave    
   animateEstudante={estudante}
   animateEmpresa={empresa}
   animateJuridica={juridica}
   estudanteClick={() => WhenClick(true, false, false)}
   empresaClick={() => WhenClick(false, true, false)}
   juricaClick={() => WhenClick(false, false, true)} />
 
 <AnimatePresence initial={true}>
  <article className="container-pai-animation-info">
  { estudante && 
    <Estudante key={1}/>
   }
  { empresa && 
   <Empresa key={2}/>
  }
  {
   juridica &&
   <Juridica key={3}/>
  }
  </article>
 </AnimatePresence>
 </>

)};