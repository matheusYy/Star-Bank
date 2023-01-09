import './footer.css';
import './form.css';
import Icon from './icone';
import Social from './icon/social';
import { InputFormik } from './formulario';
export default function wavesFooter() {
 return (
  <footer className="footer-container">
   <p>Hey, esse é o ultimo scroll do meu site, sou um desenvolvedor front-end, visite minha conta no GitHub, lá você encontra todos os meus outros projetos </p>

   <div className="curtiu-site">
     <p>Curtiu o site?</p>
       <Icon />     
    </div>
    <div className="content-form-social">
     <InputFormik />
     <Social />
    </div>
  </footer>
 )
}