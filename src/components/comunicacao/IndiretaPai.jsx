import { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai(props) {
  const [infos, setInfos] = useState({
    nome: '',
    idade: 0,
    nerd: true,
  })

  function getInfos(nome, idade, nerd) {
    setInfos({nome, idade, nerd})
  }

  // nome, idade e se é nerd
  return (
    <div>
      <div>
        <span>{ infos.nome} - </span>
        <span>{ infos.idade} - </span>
        <span>{ infos.nerd ? 'Verdadeiro' : 'Falso' }</span>
      </div>
      <IndiretaFilho handleClick={ getInfos } />
    </div>
  )
}