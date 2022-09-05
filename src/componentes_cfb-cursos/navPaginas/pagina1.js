import React from 'react'

export default function Pagina1(props){
	return(
		<div>
			<h1>Página 1</h1>
			<h3>Curso de React</h3>
			{/* funciona tanto para alterar a página apenas com state, quanto com useEffect */}
			<button onClick={()=>props.LinksPaginas(0)}>Voltar</button>
		</div>
	)
}