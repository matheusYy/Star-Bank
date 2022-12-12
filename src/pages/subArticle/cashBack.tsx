import './cashBack.css';

export default function CashBack() {
 return(
  <article className="contentCashBack">
   <div><h3>Como conseguir cashback?</h3></div>
    <aside className="contentIconesCash">
     <div className="content-icon-1"> {/* content */}
      <div></div> {/* child */}
     </div>
     <div className="content-icon-2"> {/* content */}
      <div></div> {/* child */}
     </div>
     <div className="content-icon-3"> {/* content */}
      <div></div> {/* child */}
     </div>
    </aside>
   <aside className="contentTextCashBack">
    <div>
     <p>Crie sua conta na star e peça seu cartão, e o receba 
      em serca de 5 a 20 dias</p>
    </div>
    <div>
      <p>Faça alguma compra usando o cartão, contas de luz, 
       gua, mensalidades</p>
    </div>
    <div>
     <p>Pronto! Facil assim, veja o quanto de cashback você 
      recebeu dando uma olhada na sua conta.</p>
    </div>
   </aside>
  </article>
 )
}