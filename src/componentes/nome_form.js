// manipulando dados de formulários
import React, {useState} from 'react'

export default function App(){
	const [nome, setNome] = useState('')
	const [carro, setCarro] = useState('HRV')

	return(
		<form>
			<label>Digite seu nome: </label>
			<input type='text' name='nome' value={nome} onChange={(e)=>setNome(e.target.value)}/><br/>
			<p>Nome digitado: {nome}</p>
			
			<label>Selecione um carro</label>
			<select value={carro} onChange={(e)=>setCarro(e.target.value)}>
				<option value='HRV'>HRV</option>
				<option value='Golf'>Golf</option>
				<option value='Cruze'>Cruze</option>
				<option value='Argo'>Argo</option>
			</select>
			<p>Carro selecionado: {carro}</p>
		</form>
	)

	// usando handle (?) para o nome
	// const [nome, setNome] = useState('')
	// const handleChangeNome = (e)=>setNome(e.target.value)

	// return(
	// 	<>
	// 		<label>Digite seu nome: </label>
	// 		<input type='text' name='nome' value={nome} onChange={(e)=>handleChangeNome(e)}/><br/>
	// 		<p>Nome digitado: {nome}</p>
	// 	</>
	// )
}