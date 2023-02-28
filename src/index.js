import ReactDOM from 'react-dom';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';
import './index.css';

const element = document.getElementById('root');

ReactDOM.render(
  <div>
    <Primeiro />
    <ComParametro
      titulo='Segundo Componente'
      subtitulo='Hello!' />
  </div>, 
  element)