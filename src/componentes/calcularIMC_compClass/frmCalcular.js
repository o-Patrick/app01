import React from 'react'

// componente com botão que calcula o IMC (recebe peso e altura e passa para setResultado)
export default class FrmCalcular extends React.Component{
	constructor(){
		super()
		// bind cálculo do resultado
		this.calc = this.Calcular.bind(this)
		// cálculo direto no constructor
		this.calc = () => this.props.setResultado(this.props.peso / this.props.altura**2)
	}

	// a função sendo externa para o bind
	Calcular = () => this.props.setResultado(this.props.peso / this.props.altura**2)

	render(){
		return(
			<div>
				<button type="button" onClick={this.calc}>Calcular com bind</button>
				<button type="button" onClick={()=>this.calc()}>Calcular direto do constructor</button>
			</div>
		)
	}
}