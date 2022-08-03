import React from 'react'

export default function Link(){
	const cancelar = (obj) => {
		return obj.preventDefault()
	}

	return(
		<>
			{/* 'e' passa o próprio componente */}
			<a href="https://youtube.com" target="_blank" onClick={(e)=>cancelar(e)}>YouTube</a>
		</>
	)
}