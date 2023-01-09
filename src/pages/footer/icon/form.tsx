
import { useState, useEffect } from 'react';
export default function Form() {
const [valideNome, setValideNome] = useState('');
const [valideEmail, setValideEmail] = useState('');
const [valideTextArea, setTextArea] = useState('');

function validate(event: any): boolean {
 if(event.target.value == '') {
  return true;
 } else {
  return false;
 };
};

 return ( 
  <aside className="footer-end">
  <form 
   action="https://formsubmit.co/matheusrodrigues.yy7@gmail.com" 
   method='POST' 
   className='form-style'
   autoComplete='off'>
    <div className='input-sty input-child-sty-name'>
     <span></span>
     <input 
      type="text" 
      className="input-child-sty" 
      name="name" 
      placeholder="seu nome" 
      required 
      autoFocus 
      autoComplete='off'
      max={25}
      min={2}
      data-validate-name={valideNome}
      pattern={'^[a-zA-Z][a-zA-Z-_\.]{1,20}$'}
      onInvalid={(event: any) => setValideNome(validate(event) ? 'true' : 'false')}
      onInput={(event) => setValideNome(validate(event) ? 'true' : 'false') }
      />
      { valideNome == 'true' &&
       <div className="msg-input"><p>É preciso preencher esse campo para continuar</p></div>
      }
    </div>
    <div className='input-sty input-child-sty-email'>
     <span></span>
     <input 
      type="email" 
      className="input-child-sty" 
      name="email" 
      placeholder="seu email" 
      required 
      pattern={'[a-z0-9]+@[a-z]+\.[a-z]{2,3}'}
      max={65}
      min={5}
      autoFocus 
      autoComplete='email'
      data-validate-email={valideEmail}
      onInput={(event) => setValideEmail(validate(event) ? 'true' : 'false') }/>
    </div>
   <input 
    type="hidden" 
    name="_autoresponse" 
    value="hey, legal! recebi o seu email, 
    entrarei em contato." />
  <div className="form-text-area">
    <textarea 
     name="mensagem" 
     placeholder="sua mensagem..." 
     cols={30} rows={30} 
     required
     data-valide-area={valideTextArea}
     onInput={(event) => setTextArea(validate(event) ? 'true' : 'false') }>
    </textarea>
  </div>
   <input 
    type="hidden" 
    name="_next" 
    value="./submit.html" 
    />
   <input 
    type="hidden" 
    name="_subject" 
    value="Star Bank, alguém mandou algo pelo submit!" />
   <input 
    type="hidden" 
    name="_captcha" 
    value="false" />

   <button type="submit">enviar</button>
  </form>

 
 </aside>
 )
}