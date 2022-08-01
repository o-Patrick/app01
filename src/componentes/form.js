import React from 'react'

export default function Form(props){
	return(
		<section>
			<h3>{props.id}</h3>
			<form>
				<input type="text" name="nome" id="nome" placeholder="Nome completo"/><br/>
				<input type="date" name="nasc" id="nasc" placeholder="Data de nascimento"/><br/>
				<input type="email" name="email" id="email" placeholder="E-mail"/><br/>
				<button type="button" name="enviar" id="enviar" value="enviar">Enviar</button>
			</form>
		</section>
	)
}