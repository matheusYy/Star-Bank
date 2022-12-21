import './article.css';
import Apresentation from './apresentation';
import { LineHorizontal, Line, LineRight, LineCurve} from '../lines/line';
import { Smile } from '../lines/emoji/emoji';


export default function Main() {

function moveScroll() {
  window.scrollTo(0, 720)
}
 return (
 <article  className="containerArticleInit">
  <Smile />
  <LineCurve />
  <div  className="divApresentation">
    <div className="title-init">
     <div className="tittleContainer">
       <h1><span>Apenas</span> um toque para começar</h1>
     </div>
    </div>

     <p>Sem mensalidade para usar o cartão, peça seu cartão e use-o agora,
      e junte-se a nós e mais de 700mil usuarios, comece com a Star agora e não perca
      as nossas vantagens.</p>


   <button type="button" className="buttonStart" onClick={moveScroll}> 
   <svg width="40" className="play-svg" height="40" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M25.3878 25.6221C30.8761 20.1105 30.8761 11.1874 25.3878 5.68986M5.5402 5.68986C0.051929 11.2015 0.051929 20.1246 5.5402 25.6221M10.832 28.9207C12.3339 29.4423 13.8919 29.696 15.464 29.696C17.0361 29.6819 18.5941 29.4423 20.096 28.9207M10.832 2.3913C12.3339 1.86974 13.8919 1.616 15.464 1.616C17.0361 1.616 18.5941 1.86974 20.096 2.3913" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
   <path d="M10.8881 15.656V13.3019C10.8881 10.3699 12.9515 9.17166 15.478 10.6377L17.5133 11.8218L19.5486 13.0059C22.0752 14.4719 22.0752 16.8683 19.5486 18.3343L17.5133 19.5184L15.478 20.7025C12.9515 22.1685 10.8881 20.9703 10.8881 18.0383V15.656Z" stroke="#845EC2" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>
   COMEÇAR
   </button>
   <LineHorizontal />
  </div>
  <Apresentation /> {/* layout grid  */}
 </article> 
 );
};
