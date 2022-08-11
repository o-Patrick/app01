import React from "react";

export default class BaseClasse extends React.Component{
	constructor(props){
		// para permitir o uso de props, usar super
		super(props)

		// uso de state
		this.state = {
			canal: 'CFB Cursos',
			curso: 'React',
			ativo: true,
			nome: this.props.nomeAluno // só existe, não recebe nada mesmo
		} // state

		this.status = this.props.status // só existe, não recebe nada mesmo

		// bindagem
		this.ad = this.ativarDesativarCurso.bind(this)
	} // constructor

	// função para manipular state
	ativarDesativarCurso(){
		this.setState((state) => ({ativo:!state.ativo}))
		console.log(this.state.ativo)
	}

	render(){
		return(
			<>
				<h1>Componente de Classe</h1>
				{/* Chamada da função com bind */}
				<button onClick={this.ad}>{this.state.ativo ? 'Desativar' : 'Ativar'}</button>
				{/* Chamada da função sem bind */}
				<button onClick={()=>this.ativarDesativarCurso()}>{this.state.ativo ? 'Desativar' : 'Ativar'}</button>
			</>
		)
	}

	componentDidMount(){
		console.log('O componente foi criado!')
	}

	componentDidUpdate(){
		console.log('O componente foi atualizado!')
	}

	componentWillUnmount(){
		console.log('O componente foi excluído!')
	}

} //class