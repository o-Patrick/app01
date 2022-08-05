// REPETIR EXERCÍCIO USANDO UM OBJETO NO LUGAR DE VÁRIOS STATES
// NÃO CONSIGO ALTERAR OS VALORES DOS INPUTS PELO NAVEGADOR
// elevação de state
import React, {useState} from 'react'
import Nota from './nota'
import Resultado from './resultado'

export default function Boletim(){
	// state obj
	const [notas, setNotas] = useState({'nota1':'0', 'nota2':'0', 'nota3':'0', 'nota4':'0'})
	const handleSetNotas = (e) =>{
		switch (e.target.getAttribute('name')){
			case 'nota1':
				setNotas({'nota1':e.target.value, 'nota2':notas.nota2, 'nota3':notas.nota3, 'nota4':notas.nota4})
				break
			case 'nota2':
				setNotas({'nota1':notas.nota1, 'nota2':e.target.value, 'nota3':notas.nota3, 'nota4':notas.nota4})
				break
			case 'nota3':
				setNotas({'nota1':notas.nota1, 'nota2':notas.nota2, 'nota3':e.target.value, 'nota4':notas.nota4})
				break
			case 'nota4':
				setNotas({'nota1':notas.nota1, 'nota2':notas.nota2, 'nota3':notas.nota3, 'nota4':e.target.value})
				break
		}
	}
	// um state para cada nota
	// const [nota0, setNota0] = useState(0)
	// const [nota1, setNota1] = useState(0)
	// const [nota2, setNota2] = useState(0)
	// const [nota3, setNota3] = useState(0)

	return(
		<>
			<Nota num={1} nota={notas.nota1} setNotas={handleSetNotas}/>
			<Nota num={2} nota={notas.nota2} setNotas={handleSetNotas}/>
			<Nota num={3} nota={notas.nota3} setNotas={handleSetNotas}/>
			<Nota num={4} nota={notas.nota4} setNotas={handleSetNotas}/><br/>
			<Resultado somaNotas={parseFloat(notas.nota1) + parseFloat(notas.nota2) + parseFloat(notas.nota3) + parseFloat(notas.nota4)}/>
		</>
	)
}