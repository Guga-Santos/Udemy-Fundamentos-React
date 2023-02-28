import Aleatorio from "./Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import './index.css';

export default function App(props) {
  return (
    <div>
    <Primeiro />
    <ComParametro
      titulo='Segundo Componente'
      subtitulo='Hello!' />
    <Aleatorio />
  </div>
  )
};