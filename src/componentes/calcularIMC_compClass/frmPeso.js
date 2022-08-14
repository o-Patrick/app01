import React from 'react'

// componente input para o peso (recebe peso e setPeso)
export default class frmPeso extends React.Component{
	render(){
		return(
			<div>
				<label for="numPeso">Peso </label>
				<input type="number" id="numPeso" value={this.props.peso} onChange={(e)=>this.props.setPeso(e.target.value)}/>
			</div>
		)
	}
}