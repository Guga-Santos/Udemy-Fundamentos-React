import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props){
  return(
    <div>
      <FamiliaMembro nome="Gustavo" sobrenome="Santos"/>
      <FamiliaMembro nome="Amanda"{...props}/>
      <FamiliaMembro nome="Cacau" sobrenome="Noel"/>
    </div>
  )
};