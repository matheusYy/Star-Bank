import Social from './icon/social';
export default function Form() {

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
      autoComplete='off'/>
    </div>
    <div className='input-sty input-child-sty-email'>
     <span></span>
     <input 
      type="email" 
      className="input-child-sty" 
      name="email" 
      placeholder="seu email" 
      required 
      autoFocus 
      autoComplete='off'/>
    </div>
   <input 
    type="hidden" 
    name="_autoresponse" 
    value="hey, legal! recebi o seu email, 
    entrarei em contato." />
  <div className="form-text-area">
    <textarea name="mensagem" placeholder="sua mensagem..." cols={30} rows={30} required></textarea>
  </div>
   <input 
    type="hidden" 
    name="_next" 
    value="./submit.tsx" 
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

  <Social />
 </aside>
 )
}