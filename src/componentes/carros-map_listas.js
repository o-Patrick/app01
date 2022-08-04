import React from 'react'

export default function Carros(){
	// array simples
	// const carros = ['HRV','Golf','Focus','Cruze','Argo']
	// array em formato json
	const carros = [
		{categoria:'Esporte',    preco:'110000.00', modelo:'Golf GTI'},
		{categoria:'Esporte',    preco:'120000.00', modelo:'Camaro'  },
		{categoria:'SUV',        preco:'85000.00',  modelo:'HRV'     },
		{categoria:'SUV',        preco:'83000.00',  modelo:'T-Cross' },
		{categoria:'Utilitario', preco:'120000.00', modelo:'Hilux'   },
		{categoria:'Utilitario', preco:'90000.00',  modelo:'Ranger'  }
	]
	const listaCarros = carros.map((c, i)=><li key={i}>{i + 1}. {`[${c.categoria}]`} {c.modelo}</li>)

	return(
		<>
			<ul>{listaCarros}</ul>
		</>
	)
}