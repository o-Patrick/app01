import React, {useState} from 'react'
import Led from './componentes/led'
import './App.css'

export default function App(){
  const [luz, setLuz] = useState(false)

  return(
    <>
      <Led luz={luz} setLuz={setLuz}/>
      {/* VÍDEO EM 10:21 */}
    </>
  )
}
