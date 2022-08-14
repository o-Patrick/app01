import React from 'react'

// componente com botão que calcula o IMC (recebe peso e altura e passa para setResultado)
export default function FrmCalcular(props){
	// cálculo do resultado
	const calc = () => props.setResultado(props.peso / props.altura**2)

	return(
		<div>
			<button type="button" onClick={()=>calc()}>Calcular</button>
		</div>
	)
}