import Aleatorio from "./Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Primeiro from "./components/basicos/Primeiro";
import Card from "./components/layout/Card";
import './index.css';

export default function App(props) {
  return (
    <div >
    <Primeiro />
    <div className="Cards">
    <Card titulo="Família">
      <Familia sobrenome="Santos">
      <FamiliaMembro nome="Gustavo"/>
      <FamiliaMembro nome="Amanda"/>
      <FamiliaMembro nome="Cacau"/>
      </Familia>
    </Card>
    <Card titulo="Com Parâmetro">
    <ComParametro
      titulo='Segundo Componente'
      subtitulo='Hello!' />
    </Card>
    <Card titulo="Meu Card">
    <Aleatorio max={60} min={1}/>
    </Card>
    </div>
  </div>
  )
};