import './info.css';

export default function Info() {
 return (
  <article className="infoText">
   <span>
    <h1>Estudante</h1>
     <h1>Empresa</h1>
      <h1>Pessoa Juridica</h1>
   </span>
   <aside className="infoGrid"> {/* container grid info */}
    <div className="containerServices"></div> {/* services 1/2 grid */}
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