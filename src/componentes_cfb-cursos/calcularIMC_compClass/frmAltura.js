import React from 'react'

// componente input para a altura (recebe altura e setAltura)
export default class FrmAltura extends React.Component{
	render(){
		return(
			<div>
				<label for="numAltura">Altura </label>
				<input type="number" id="numAltura" value={this.props.altura} onChange={(e)=>this.props.setAltura(e.target.value)}/>
			</div>
		)
		}
}