// TÁ DANDO ERRO

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
			nome: this.props.nomeAluno
		} // state

		this.status = this.props.status

		// bindagem
		let ad = ativarDesativarCurso.bind(this)
	} // constructor

	// função para manipular state
	ativarDesativarCurso(){this.setState((state) => ({ativo:!state.ativo}))}

	render(){
		return(
			<>
				<h1>Componente de Classe</h1>
				{/* Chamada da função com bind */}
				<button onClick={this.ad}>{this.state.ativo ? 'Desativar' : 'Ativar'}</button>
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