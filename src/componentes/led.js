import React, {useState} from 'react'
import LuzAcesa from './img/luz-acesa.jpg'
import LuzApagada from './img/luz-apagada.jpg'

// também é interessante usar props; se for o caso, coloque o state no outro arquivo
export default function Led(){
  const [luz, setLuz] = useState(false)

  return(
    <>
      <img src={luz?LuzAcesa:LuzApagada}/>
      <button onClick={()=>setLuz(!luz)}>{luz?'Ligado':'Desligado'}</button>
    </>
  )
}
