import React from 'react'
import Dados from './dados'
import Form from './form'
import Relogio from './relogio'

export default function Corpo(){
	// informações canal/curso
	const canal = () => {return "CFB Cursos"}
	const youtube = "youtube.com/cfbcursos"
	const curso = "React.js"

	// nomenclatura form
	const idForm = "Formulário de cadastro"

	// soma
	const somar = (v1, v2) => {return v1+v2}

	// css "incorporado"
	const textoDestaque = {
		color: '#0f0',
		fontSize: '20px'
	}

	return(
		<section>
			<Relogio/>
			<h2 style={{color:'#f00', fontSize:'2em'}}>Curso de React</h2>
			<p style={textoDestaque}>Se inscreva em nosso canal</p>
			{/* a classe abaixo foi importada no componente pai */}
			<p className='texto'>Ative o sininho e clique no joinha</p>
			<Dados canal={canal()} youtube={youtube} curso={curso} somar={somar}/>
			<Form id={idForm}/>
		</section>
	)
}