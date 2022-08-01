import React from 'react'
import LuzAcesa from './img/luz-acesa.jpg'
import LuzApagada from './img/luz-apagada.jpg'

// também é interessante usar props; se for o caso, coloque o state no outro arquivo
export default function Led(props){
  return(
    <>
      <img src={props.luz?LuzAcesa:LuzApagada}/>
      <button onClick={()=>props.setLuz(!props.luz)}>{props.luz?'Ligado':'Desligado'}</button>
    </>
  )
}
