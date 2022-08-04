// manipulação de objetos com state
import React, {useState} from 'react'

export default function NomeCursoAno(){
	// declara (?) o state
	const [form, setForm] = useState({'nome':'','curso':'','ano':''})
	// atualiza os campos de mostra com base nos inputs
	const handleChangeForm = (e)=>{
		switch (e.target.getAttribute('name')){
			case 'nome':
				setForm({'nome':e.target.value,'curso':form.curso,'ano':form.ano})
				break
			case 'curso':
				setForm({'nome':form.nome,'curso':e.target.value,'ano':form.ano})
				break
			case 'ano':
				setForm({'nome':form.nome,'curso':form.curso,'ano':e.target.value})
				break
			default: // msg erro
				alert('Elemento não encontrado!')
		}
	}

	return(
		<form>
			<label>Nome: </label>
			<input type='text' name='nome' value={form.nome} onChange={(e)=>handleChangeForm(e)}/><br/>

			<label>Curso: </label>
			<input type='text' name='curso' value={form.curso} onChange={(e)=>handleChangeForm(e)}/><br/>

			<label>Ano: </label>
			<input type='text' name='ano' value={form.ano} onChange={(e)=>handleChangeForm(e)}/><br/>

			{/* mostra os dados inseridos acima */}
			<p>Nome digitado: {form.nome}</p>
			<p>Curso digitado: {form.curso}</p>
			<p>Ano digitado: {form.ano}</p>
		</form>
	)
}