import './info.css';
import Wave from '../main/fragmentos/wave';
import GuyServices from './guy-services';

export default function Info() {
 return (
  <article className="infoText">
   <Wave />
   <aside className="infoGrid"> {/* container grid info */}
    <div className="containerServices">
     <GuyServices />
    </div> {/* services 1/2 grid */}
     <div className="containerFaculdades"></div> {/* faculdades 2/4 grid */}
      <div className="gapOfInfo"> {/* grid com mais de um item e com flex 1/3 grid container pai */}
        <div className="containerCartoes"></div>
        <div className="containerVip"></div> {/* flex, dentro do grip, RockStar */}
      </div>
     <div className="containerApp"></div> {/* grid footer */}
    <div className="containerPontos"></div> {/* grid footer dois */}
   </aside>
  </article>
 );
};