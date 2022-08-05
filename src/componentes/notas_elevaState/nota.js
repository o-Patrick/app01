// NÃO CONSIGO ALTERAR OS VALORES DOS INPUTS PELO NAVEGADOR
// elevação de states
import React from 'react'

export default function Nota(props){
	return(
		<>
			<label>Informe a {props.num}º nota: </label>
			<input name={'nota' + props.num} type='number' value={props.nota} onChange={(e)=>props.setNotas(e)}/><br/>
		</>
	)
}