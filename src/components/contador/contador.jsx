import { Component } from "react";

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
      numero: this.state.numero - this.state.pace > 0 
      ? this.state.numero - this.state.pace : 0
    })
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <p>Valor : { this.state.numero }</p>
        <div>
          <button 
          type="button"
          onClick={ () => this.decrement()}
          disabled={this.state.numero < 1}
          >Decrement</button>
          <button 
          type="button"
          onClick={ () => this.increment()}
          >Increment</button>
        </div>
      </div>
    )
  }
}