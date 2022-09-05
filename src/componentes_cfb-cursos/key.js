import React from 'react'

function ListaNumeros(props){
	const num = props.numeros
	// key é um atributo react similar ao id em html. neste caso não ocorreu, porém pode ser necessário converter um valor number atribuído à key para string
	const lista_numeros = num.map(n => <li key={n.toString()}>{n}</li>)
	return <ul>{lista_numeros}</ul>
}

const vetorNumeros = [1,2,3,4,5,6,7,8,9]

export default function Key(){
	return(
		<>
			<ListaNumeros numeros={vetorNumeros}/>
		</>
	) // return
} // App