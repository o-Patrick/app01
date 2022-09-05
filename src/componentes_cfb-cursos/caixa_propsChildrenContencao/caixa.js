import React from 'react'

export default function Caixa(props){
	return(
		<section>
			<p>{props.site}</p>
			{/* agora sim o que foi passado por App aparece em index: */}
			{props.children}
			{/* como props.children é um vetor, também é possível usar índice */}
			{props.children[0]}
		</section>
	)
}