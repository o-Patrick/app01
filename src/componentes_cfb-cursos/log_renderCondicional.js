import React, {useState} from 'react'

export default function Log(){
  // define se user está logado
  const [log, setLog] = useState(true)

  // mensagens para login/logoff
  const msgLogin = () => {
    return <p>Você está logado.</p>
  }
  const msgLogoff = () => {
    return <p>Você ainda não efetuou login.</p>
  }

  // botões para login/logoff
  const btnLogin = () => {
    return <button type='button' id='btn' onClick={()=>setLog(!log)}>Login</button>
  }
  const btnLogoff = () => {
    return <button type='button' id='btn' onClick={()=>setLog(!log)}>Logoff</button>
  }

  // cumprimento com base na hora
  const cumprimento = () => {
    const hora = new Date().getHours()

    if(hora >= 0 && hora < 13){
      return <p>Bom dia!</p>
    } else if(hora >= 13 && hora < 18){
      return <p>Boa tarde!</p>
    } else{
      return <p>Boa noite!</p>
    }
  }

  return(
    <>
      {cumprimento()}
      {log?msgLogin():msgLogoff()}
      {log?btnLogoff():btnLogin()}
    </>
  )
}
