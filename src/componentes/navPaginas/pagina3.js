import React from 'react'

export default function Pagina3(props){
	return(
		<div>
			<h1>Página 3</h1>
			<h3>Browser Router</h3>
			{/* funciona tanto para alterar a página apenas com state, quanto com useEffect */}
			{/* <button onClick={()=>props.LinksPaginas(0)}>Voltar</button> */}
		</div>
	)
}