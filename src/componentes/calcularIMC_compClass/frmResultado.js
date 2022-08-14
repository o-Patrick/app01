import React from 'react'

// componente input readonly que recebe o resultado
export default class FrmResultado extends React.Component{
	render(){
		return(
			<div>
				<label for="numResultado">Resultado </label>
				<input type="number" id="numResultado" value={Number(this.props.resultado).toFixed(2)} readOnly/>
			</div>
		)
	}
}