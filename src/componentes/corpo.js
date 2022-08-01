import React from 'react'
import Dados from './dados'
import Form from './form'

export default function Corpo(){
	const canal = "CFB Cursos"
	const youtube = "youtube.com/cfbcursos"
	const curso = "React.js"

	// nomenclatura form
	const idForm = "Formulário de cadastro"

	return(
		<section>
			<h2>Curso de React</h2>
			<p>Se inscreva em nosso canal</p>
			<p>Ative o sininho e clique no joinha</p>
			<Dados canal={canal} youtube={youtube} curso={curso}/>
			<Form id={idForm}/>
		</section>
	)
}