import React from 'react'

// componente input para a altura (recebe altura e setAltura)
export default function FrmAltura(props){
	return(
		<div>
			<label for="numAltura">Altura </label>
			<input type="number" id="numAltura" value={props.altura} onChange={(e)=>props.setAltura(e.target.value)}/>
		</div>
	)
}