import { useState } from "react"

function gerarNumeroNaocontido(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
  return array.includes(aleatorio)
  ? gerarNumeroNaocontido(min, max, array) 
  : aleatorio
}

function gerarNumeros(qt) {
  const numeros = Array(qt)
  .fill(0)
  .reduce((nums) => {
    const newNum = gerarNumeroNaocontido(1, 60, nums)
    return [...nums, newNum ]
  }, [])

  return numeros.sort((a, b) => a - b)

}

export default function Mega(props) {
  const [numeros, setNumeros] = useState([]);
  const [quantidade, setQuantidade] = useState(1);
  return (
    <div>
      <h2>MegaSena</h2>
      <h3>{ numeros.join('-') }</h3>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor="quantidade">
          Quantidade: 
          <input 
          type="number" 
          name="quantidade" 
          id="quantidade"
          style={{ width: '35px', margin: '10px'}}
          value={ quantidade }
          onChange={ (e) => setQuantidade(+e.target.value)} />
        </label>
      <button
      type="button"
      onClick={() => setNumeros(gerarNumeros(quantidade))}
      >GERAR NUMEROS</button>
      </div>
    </div>
  )
}