import React, {useState, useEffect} from 'react'
import Pagina1 from './pagina1'
import Pagina2 from './pagina2'

export default function App(){
	const [pag, setPag] = useState(0)

	// define qual o state referente ao número passado na url
	useEffect(
		() => {
			const url = window.location.href
			// [0] é tudo antes de '?' e [1] é tudo depois, sem incluir '?':
			const res = url.split('?')
			// o valor referido é passado pelos botões em cada página:
			setPag(res[1])
		}
	)

	// alterando a página com useEffect
	const LinksPaginas = p => { // p == pag
		// gera uma url com o número (ou não) que será usado no useEffect
		if(p == 1){
			window.open('http://localhost:3000?1', '_self')
		} else if(p == 2){
			window.open('http://localhost:3000?2', '_self')
		} else{
			window.open('http://localhost:3000', '_self')
		}
	}

	/* // alterando a página apenas com state
	const LinksPaginas = p => { // p == pag
		if(p == 1){
			setPag(p)
		} else if(p == 2){
			setPag(p)
		} else{
			setPag(p)
		}
	}
	*/

	const retornarPag = () => {
		if(pag == 1){
			return <Pagina1 LinksPaginas={LinksPaginas}/>
		} else if(pag == 2){
			return <Pagina2 LinksPaginas={LinksPaginas}/>
		} else{
			return(
				<div>
					<button onClick={()=>LinksPaginas(1)}>Página 1</button>
					<button onClick={()=>LinksPaginas(2)}>Página 2</button>
				</div>
			)
		}
	}

	return(
		<>
			{retornarPag()}
		</>
	)
}