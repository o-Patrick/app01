import React, {useState} from 'react'

// também é interessante usar props; se for o caso, coloque o state no outro arquivo
export default function Numero(props){
	const [num, setNum] = useState(10)

	return(
		<section>
			<p>Valor do state num em js: {num}</p>
			<button onClick={()=>setNum(num + 10)}>+ 10</button>
		</section>
	)
}