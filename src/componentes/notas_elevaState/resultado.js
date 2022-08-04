// REPETIR EXERCÍCIO USANDO UM OBJETO NO LUGAR DE VÁRIOS STATES
// elevação de states
import React from 'react'

export default function Resultado(props){
	return(
		<>
			<div>
				<label>Soma das notas: </label>
				<input type='text' value={props.somaNotas} readOnly/>

				<p>{props.somaNotas > 60 ? 'Aprovado' : 'Reprovado'}</p>
			</div>
		</>
	)
}