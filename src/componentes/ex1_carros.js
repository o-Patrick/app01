// o select recebe um option para cada objeto, não excluindo os repetidos
import React, {useState} from 'react'

// json
const carros = [
	{categoria:'ESPORTE', preco:'110000', modelo:'GOLF GTI'},
	{categoria:'ESPORTE', preco:'120000', modelo:'CAMARO'},
	{categoria:'SUV', preco:'85000', modelo:'HRV'},
	{categoria:'SUV', preco:'83000', modelo:'T-CROSS'},
	{categoria:'UTILITARIO', preco:'125000', modelo:'HILUX'},
	{categoria:'UTILITARIO', preco:'90000', modelo:'RANGER'}
]

// cria cada linha da tabela
const Linhas = (cat) => {
	// recebe cada linha da tabela:
	const li = []
	carros.forEach(
		(carro) => {
			// cria as linhas da tabela (recebe vazio para teste por causa do state):
			if(carro.categoria === cat || cat === ''){
				// povoa o vetor que recebe cada linha da tabela:
				li.push(
					<tr>
						<td>{carro.categoria}</td>
						<td>{carro.preco}</td>
						<td>{carro.modelo}</td>
					</tr>
				) // push
			} // if
		} // arrow func
	) // forEach
	return li
} // Linhas()

// cria a estrutura maior da tabela
const TabelaCarros = (cat) => {
	return(
		<table border='1' style={{borderCollapse:'collapse'}}>
			<thead>
				<tr>
					<th>Categoria</th>
					<th>Preço</th>
					<th>Modelo</th>
				</tr>
			</thead>
			<tbody>
				{/* envia o state */}
				{Linhas(cat)}
			</tbody>
		</table>
	)
}

// gera os options do select
const SelectOptions = () => {
	const opt = []
	carros.forEach(
		(carro) => {
			// o erro só pode ser nessa linha:
			if(!opt.includes(`<option value=${carro.categoria}>${carro.categoria}</option>`)){
				opt.push(
					<option value={carro.categoria}>{carro.categoria}</option>
				) // push
			} // if
		} //arrow func
	) // forEach
	return opt
} // SelectOptions()

// cat === categoria, scat === setCategoria
const PesquisaCategoria = (cat, scat) => {
	return(
		<div>
			<label>Digite sua categoria</label>&nbsp;
			<select value={cat} onChange={(e)=>scat(e.target.value)}>
				<option></option>
				{SelectOptions()}
			</select>
			{/* usa input text simples */}
			{/* <input type="text" value={cat} onChange={(e)=>scat(e.target.value.toUpperCase())}/> */}
		</div>
	)
}

export default function Carros(){
	const [categoria, setCategoria] = useState('')

	return(
		<>
			{/* envia o state e sua função */}
			{PesquisaCategoria(categoria, setCategoria)}
			<br/>
			{/* envia state */}
			{TabelaCarros(categoria)}
		</>
	)
}