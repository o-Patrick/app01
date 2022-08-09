import React from 'react'
import Classe from './classe'
import Carro from './carro_Class'

export default function App(){
	return(
		<>
			<h1>Mostra Classes</h1>
			<Classe canal="CFB Cursos" curso="React"/>
			<Carro/>
		</>
	)
}