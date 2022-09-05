import React from 'react'

export default class Carro extends React.Component{
	// É possível usar constructor e super, porém dá pra usar this direto e o terminal avisa que o constructor é desnecessário (seria por isso ou algo similar a uma variável que não é usada?)
	constructor(props){
		super(props)
		this.modelo = 'Golf'
		this.state = {
			ligado: false,
			velocidade: 0,
		}
		// une a classe Carro com a função ligarDesligar
		this.ld = this.ligarDesligar.bind(this)
	}

	ligarDesligar(){
		// a linha abaixo muda o valor do state, mas este não renderiza novamente
		// this.state.ligado = this.state.ligado ? false : true

		// forma correta:
		// this.setState({ligado:!this.state.ligado})

		// para evitar qualquer problema de atualização
		this.setState((state) => ({ligado:!state.ligado}))

		// a mesma coisa de cima, usando uma função tradicional
		// this.setState(
		// 	function (state){
		// 		return {ligado:!state.ligado}
		// 	}
		// )
	}

	acelerar(){
		this.setState(
			(state, props) => ({velocidade:state.velocidade + props.fator})
		)
	}

	render(){
		return(
			<>
				<h2>Meu carro</h2>
				<p>Modelo: {this.modelo}</p>
				<p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
				<p>Velocidade: {this.state.velocidade}</p>
				{/* O botão abaixo é uma versão mais simples que o debaixo dele, por causa do bind feito no constructor */}
				<button onClick={this.ld}>{this.state.ligado ? 'Desligar' : 'Ligar'}</button>
				{/* <button onClick={()=>this.ligarDesligar()}>{this.state.ligado ? 'Desligar' : 'Ligar'}</button> */}
				<button onClick={()=>this.acelerar()}>Acelerar</button>
			</>
		)
	}

	// a posição de componentDidMount não interfere, porque ele sempre é executado depois do render finalizar (incluindo atualizações no código)
	componentDidMount(){
		console.log('O carro foi criado!')
	}

	// chamado toda vez que o componente é atualizado durante a execução, não com o código atualizado
	componentDidUpdate(){
		console.log('O carro foi atualizado!')
	}

	// quando o componente for removido
	componentWillUnmount(){
		console.log('O carro foi excluído!')
	}
}