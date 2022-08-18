import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// usando componente funcional com fetch
export default function ListaCarros(){
	const [carros, setCarros] = useState([])

	useEffect(() => {
		fetch('https://cfbcursosapireactexemplo01.opatrick.repl.co')
			.then(res => res.json())
			.then(resultado => setCarros(resultado))
	})

	return(
		<div>
			{carros.map(carro => <div key={carro.id}>{carro.id}. {carro.marca}: {carro.modelo}</div>)}
		</div>
	)
}

// usando componente funcional com axios
// export default function ListaCarros(){
// 	const [carros, setCarros] = useState([])

// 	useEffect(() => {
// 		axios.get('https://cfbcursosapireactexemplo01.opatrick.repl.co')
// 			.then(res => setCarros(res.data))
// 	})

// 	return(
// 		<div>
// 			{carros.map(carro => <div key={carro.id}>{carro.id}. {carro.marca}: {carro.modelo}</div>)}
// 		</div>
// 	)
// }

// usando componente de classe com axios
// export default class ListaCarros extends React.Component{
// 	state = {
// 		carros: []
// 	}

// 	componentDidMount(){
// 		axios.get('https://cfbcursosapireactexemplo01.opatrick.repl.co')
// 			.then(res => this.setState({carros:res.data}))
// 	}

// 	render(){
// 		return(
// 			<div>
// 				{this.state.carros.map(carro => <div key={carro.id}>{carro.id}. {carro.marca}: {carro.modelo}</div>)}
// 			</div>
// 		)
// 	}
// }