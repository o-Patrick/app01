import React, {useState} from 'react'
import Classe from './classe'
import Carro from './carro_Class-Bind-CiclodeVida'

export default function MostraClasses(){
	const [carro, setCarro] = useState(true)

	const mostrarOcultarCarro = () => {setCarro(!carro)}

	return(
		<>
			<h1>Mostra Classes</h1>
			<Classe canal="CFB Cursos" curso="React"/>
			{/* testa componentWillUnbound em carro_Class-Bind.js */}
			<button onClick={()=>mostrarOcultarCarro()}>{carro ? 'Ocultar carro' : 'Mostrar carro'}</button>
			{/* <Classe canal="CFB Cursos" curso="React"/> */}
			{carro ? <Carro fator={1}/> : ''}
		</>
	)
}