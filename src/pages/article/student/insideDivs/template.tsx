export default function faculdades(props: any) {
 return (
  <div className={props.estilo} onClick={props.click}>
    <h3>{props.titulo}</h3>
    <p>{props.texto}</p>
    <div className={props.imagem}></div>
  </div>
 )
}