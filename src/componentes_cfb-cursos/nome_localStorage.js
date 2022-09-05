import React, {useState} from 'react'

export default function Nome(){
	const [nome, setNome] = useState('')

	const armazenar = (chave, valor) => {
		localStorage.setItem(chave, valor)
		alert(`${valor} adicionado com sucesso!`)
	}

	const consultar = (chave) => alert(localStorage.getItem(chave))

	const apagar = (chave) => localStorage.removeItem(chave)

	return(
		<>
			<h1>Local storage nome</h1>
			<label>Digite um nome </label>
			<input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
			<button onClick={()=>armazenar('ls_nome', nome)}>Guardar nome</button>
			<button onClick={()=>consultar('ls_nome')}>Ver nome</button>
			<button onClick={()=>apagar('ls_nome')}>Apagar nome</button>
		</>
	)
}