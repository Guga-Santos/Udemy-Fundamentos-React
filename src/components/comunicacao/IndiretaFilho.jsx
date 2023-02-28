export default function IndiretaFilho(props) {
  return (
    <div>
      <div>Filho</div>
      <button 
      type="button"
      onClick={(e) => props.handleClick('Euclides', 75, true)}
      >
        Fornecer Informações
      </button>
    </div>
  )
}