import React from "react";

export default function Familia(props){
  return(
    <div>
      { React.Children.map(props.children, (element) => {
        return React.cloneElement(element, props)
      })}
           {/* { props.children.map((element) => {
        return React.cloneElement(element, props)
      })} */}
    </div>
  )
};