// REPETIR EXERCÍCIO USANDO UM OBJETO NO LUGAR DE VÁRIOS STATES
// elevação de state
import React, {useState} from 'react'
import Nota from './nota'
import Resultado from './resultado'

export default function Boletim(){
	const [nota0, setNota0] = useState(0)
	const [nota1, setNota1] = useState(0)
	const [nota2, setNota2] = useState(0)
	const [nota3, setNota3] = useState(0)

	return(
		<>
			<Nota num={0} nota={nota0} setNota={setNota0}/>
			<Nota num={1} nota={nota1} setNota={setNota1}/>
			<Nota num={2} nota={nota2} setNota={setNota2}/>
			<Nota num={3} nota={nota3} setNota={setNota3}/><br/>
			<Resultado somaNotas={parseFloat(nota0) + parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)}/>
		</>
	)
}