import DiretaFilho from "./DiretaFilho";

export default function DiretaPai(props) {
  return (
    <div>
      <DiretaFilho
        texto="Filho 1"
        numero={10}
        bool={false} />

      <DiretaFilho
        texto="Filho 2"
        numero={15}
        bool={true} />
    </div>
  )
}