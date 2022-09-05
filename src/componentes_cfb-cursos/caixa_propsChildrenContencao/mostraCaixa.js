import React from 'react'
import Caixa from './caixa'
import Canal from './canal'

export default function MostraCaixa(props){
	return(
		<>
			<Caixa site='www.cfbcursos.com.br'>
				{/* as children não aparecem direto na página porque estão sendo passadas para Caixa.js, similar aos atributos para props */}
				<Canal/>
				<p>Curso de React</p>
			</Caixa>
		</>
	)
}