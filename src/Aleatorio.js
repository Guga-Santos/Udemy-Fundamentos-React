export default function Aleatorio(props) {
  const { max, min } = props;
  const random = Math.random() * max + min;

  return(
    <div>
      <h3>Número máximo: { max }</h3>
      <h3>Número mínimo: { min }</h3>
      <h3>Número Aleatório: { random.toFixed() } </h3>
    </div>
  )
};