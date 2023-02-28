import If from "./If"

export default function UsuarioInfo(props) {
  return (
    <div>
      <If test={props.usuario && props.usuario.nome}>
         Seja bem-vindo { props.usuario.nome }!
      </If>
    </div>
  )
}