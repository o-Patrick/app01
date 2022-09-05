import React from 'react'

export default function Dados(props){
	const n1 = 10
	const n2 = 5

	return(
		<section>
			<p>Canal: {props.canal}</p>
			<p>YouTube: {props.youtube}</p>
			<p>Curso: {props.curso}</p>
			<p>{`A soma entre ${n1} e ${n2} é ${props.somar(n1, n2)}`}</p>
		</section>
	)
}