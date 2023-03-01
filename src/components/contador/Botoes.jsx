export default function Botoes(props) {
  return (
    <div>
          <button 
          type="button"
          onClick={props.decrement}
          >Decrement</button>
          <button 
          type="button"
          onClick={props.increment}
          >Increment</button>
        </div>
  )
}