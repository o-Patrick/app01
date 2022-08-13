import React from 'react'

// componente input para o peso (recebe peso e setPeso)
export default function FrmPeso(props){
	return(
		<div>
			<label for="numPeso">Peso </label>
			<input type="number" id="numPeso" value={props.peso} onChange={(e)=>props.setPeso(e.target.value)}/>
		</div>
	)
}