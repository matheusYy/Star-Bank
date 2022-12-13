import './footer.css';
import Icon from './icone';
import Social from './icon/social';
export default function wavesFooter() {
 return (
  <footer className="footer-container">
   <p>Hey, esse é o ultimo scroll do meu site, sou um desenvolvedor front-end, visite minha conta no GitHub, lá você encontra todos os meus outros projetos </p>
   <aside className="footer-end">
    <div className="social">
     <span>
      <h4>Social</h4>
       <Social />
     </span>
     <span>
      <h4>Tempo de produção</h4>
      <p>2 dias e 7 horas</p>
     </span>
    </div>

    <div className="curtiu-site">
     <p>Curtiu o site?</p>
       <Icon />     
    </div>

    <div className="projetos-e-contato">
     <span>
      <h4>Projetos futuros</h4>
      <p>Cubo Scroll Shop 3D</p>
     </span>

     <span>
      <h5>Contato</h5>
      <p>+5513996220978</p>
      <p>matheusrodrigues.yy7@gmail.com</p>
     </span>
    </div>
   </aside>
  </footer>
 )
}