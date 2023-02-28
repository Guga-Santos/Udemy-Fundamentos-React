export default function ParOuImpar(props) {
  return(
    <div>
      {
        props.numero % 2 === 0 
      ?
      <span>Par</span>
      :
      <span>Ímpar</span>
      }
    </div>
  )
}