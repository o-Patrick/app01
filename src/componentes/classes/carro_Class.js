import React from 'react'

export default class Carro extends React.Component{
	// É possível usar constructor e super, porém dá pra usar this direto e o terminal avisa que o constructor é desnecessário (seria por isso ou algo similar a uma variável que não é usada?)
	constructor(props){
		super(props)
		this.modelo = 'Golf'
		this.state={
			ligado: false,
			velocidade: 0,
		}
	}

	ligarDesligar(){
		// a linha abaixo muda o valor do state, mas este não renderiza novamente
		// this.state.ligado = this.state.ligado ? false : true
		// forma correta:
		this.setState({ligado:!this.state.ligado})
	}

	render(){
		return(
			<>
				<h2>Meu carro</h2>
				<p>Modelo: {this.modelo}</p>
				<p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
				<p>Velocidade: {this.state.velocidade}</p>
				<button onClick={()=>this.ligarDesligar()}>{this.state.ligado ? 'Desligar' : 'Ligar'}</button>
			</>
		)
	}
}