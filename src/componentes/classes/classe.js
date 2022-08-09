import React from 'react'

export default class Classe extends React.Component{
	// É possível usar constructor e super, porém dá pra usar this direto e o terminal avisa que o constructor é desnecessário (seria por isso ou algo similar a uma variável que não é usada?)
	// constructor(props){
	// 	super(props)
	// }

	render(){
		return(
			<>
				<h2>Primeiro Componente de Classe</h2>
				<p>Canal: {this.props.canal}</p>
				<p>Curso: {this.props.curso}</p>
			</>
		)
	}
}