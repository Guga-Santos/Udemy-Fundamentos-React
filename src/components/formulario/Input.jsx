import { useState } from "react"

export default function Input(props) {
  const [valor, setValor] = useState('Inicial')

  const handleChange = (e) => {
    setValor(e.target.value)
  }

  return(
    <>
    <input type="text" value={valor} onChange={handleChange} />
    <h2>{ valor }</h2>
    </>
  )
}