import './Card.css';

export default function Card(props){
  return(
    <div className='Card'>
      <div className='Title'>
           {props.titulo}
      </div>
      <div className='Content'>
        { props.children }
      </div>
    </div>
  )
};