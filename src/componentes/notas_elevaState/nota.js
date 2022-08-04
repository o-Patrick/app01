// REPETIR EXERCÍCIO USANDO UM OBJETO NO LUGAR DE VÁRIOS STATES
// elevação de states
import React from 'react'

export default function Nota(props){
	return(
		<div>
			<label>Informe a {props.num + 1}º nota: </label>
			<input type='number' max='10' value={props.nota} onChange={(e)=>props.setNota(e.target.value)}/>
		</div>
	)
}