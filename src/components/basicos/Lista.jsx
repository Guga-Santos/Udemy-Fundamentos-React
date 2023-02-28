import { produtos } from "../../data/produtos"
import './Lista.css'

export default function Lista() {
  const listaDeProdutos = produtos.map((produto, index) => {
    return(
      <tr key={index}>
        <td>{ produto.id }</td>
        <td>{ produto.nome }</td>
        <td>{ produto.valor }</td>
      </tr>
    )
  })

  return (
    <table border={1}>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
        {listaDeProdutos}
      </tbody>
    </table>
  )
}