import React, {useState} from 'react'

// CORRIGIR CHAMADAS MÚLTIPLAS DO INTERVALO (já corrigi?)

export default function App(){
  const [cor, setCor] = useState(1)

  const vermelho = {color:'#f00'}
  const verde = {color:'#0f0'}
  const azul = {color:'#00f'}

  // retorna cor
  const retCor = ()=>{
    switch (cor){
      case 1:
        return vermelho
        break
      case 2:
        return verde
        break
      case 3:
        return azul
        break
      default:
        alert('Valor inválido!')
    }
  }

  const mudaCor=()=>{
    setCor(cor+1)
    if(cor>2){
      setCor(1)
    }
  }

  setInterval(mudaCor, 1000)

  return(
    <>
      <h1 style={retCor()}>Selecione a cor</h1>
      <button onClick={()=>mudaCor()}>Muda cor</button>
    </>
  )
}