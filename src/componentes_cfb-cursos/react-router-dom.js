import React from 'react'
// Switch foi descontinuado e Routes o substituiu
import {Routes, Route, Link} from 'react-router-dom'
import Pagina1 from './navPaginas/pagina1'
import Pagina2 from './navPaginas/pagina2'
import Pagina3 from './navPaginas/pagina3'

export default function App(){
	return(
		<>
			<header>
				<Link to=''>Home</Link>
				<Link to='/pag1'>Página 1</Link>
				<Link to='/pag2'>Página 2</Link>
				<Link to='/pag3'>Página 3</Link>
			</header>
			<main>
				<Routes>
					{/* atributo component foi descontinuado e substituído por element */}
					<Route path='/pag1' element={<Pagina1/>}/>
					<Route path='/pag2' element={<Pagina2/>}/>
					<Route path='/pag3' element={<Pagina3/>}/>
				</Routes>
			</main>
		</>
	) // return
} // App