import React, {useState} from 'react'
import Globais from './globais_static'

export default function Info(){
	const [resumo, setResumo] = useState(Globais.resumo)

	const gravarResumo = () => Globais.resumo = resumo

	const verResumo = () => alert(Globais.resumo)

	return(
		<>
			<p>{`Canal: ${Globais.canal}`}</p>
			<p>{`Curso: ${Globais.curso}`}</p>
			<p>{`Ano: ${Globais.ano}`}</p>
			<hr/>
			<input type="text" size="50" value={resumo} onChange={(e)=>setResumo(e.target.value)}/>
			<button onClick={()=>gravarResumo()}>Gravar resumo</button>
			<button onClick={()=>verResumo()}>Ver resumo</button>
		</>
	)
}