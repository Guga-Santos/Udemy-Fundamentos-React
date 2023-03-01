import { useState } from "react"

export default function Pace(props) {
  const [valor, setValor] = useState(1)

  const handleValue = (e) => {
    console.log(e)
  }

  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center'}}>
      <p>Passo: </p>
      <input 
      type="number" 
      name="Pace" 
      id="Pace"
      value={ props.pace }
      style={{
        height: '20px',
        width: '50px',
        margin: '0 10px'
      }}
      onChange={ (e) => props.setPace(e.target.value) } />
    </div>
  )
}