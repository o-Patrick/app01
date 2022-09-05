import React from 'react'

// componente input readonly que recebe o resultado
export default function FrmResultado(props){
	return(
		<div>
			<label for="numResultado">Resultado </label>
			<input type="number" id="numResultado" value={Number(props.resultado).toFixed(2)} readOnly/>
		</div>
	)
}