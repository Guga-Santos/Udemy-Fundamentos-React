export default function DiretaFilho(props) {
  return (
    <div>
      <span>{props.texto} - </span>
      <span>{props.numero} - </span>
      <span>{props.bool ? 'Verdadeiro' : 'Falso'}!</span>
    </div>
  )
}