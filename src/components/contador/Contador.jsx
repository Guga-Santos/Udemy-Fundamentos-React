import { Component } from "react";
import Botoes from "./Botoes";
import Display from "./Display";
import Pace from "./Pace";

export default class Contador extends Component {
  state ={
    numero: this.props.numeroInicial || 0,
    pace: this.props.pace || 1,
  }

  increment() {
    this.setState({
      numero: this.state.numero + this.state.pace
    })
  }

  decrement() {
    this.setState({
      numero: this.state.numero - this.state.pace 
    })
  }

  handlePace(newPace) {
    this.setState({
      pace: newPace
    })
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <Pace pace={ this.state.pace } setPace={ (e) => this.handlePace(+e) } />
        <Display numero={ this.state.numero } />
        <Botoes increment={() => this.increment()} decrement={() => this.decrement()}/>
      </div>
    )
  }
}