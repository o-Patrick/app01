import React, {useState} from 'react'
// componente input para o peso (recebe peso e setPeso)
import FrmPeso from './frmPeso'
// componente input para a altura (recebe altura e setAltura)
import FrmAltura from './frmAltura'
// componente com botão que calcula o IMC (recebe peso e altura e passa para setResultado)
import FrmCalcular from './frmCalcular'
// componente input readonly que recebe o resultado
import FrmResultado from './frmResultado'
// componente tabela de IMC
import TabelaIMC from './tabelaIMC'

export default function CalcularIMC(){
	const [peso, setPeso] = useState('')
	const [altura, setAltura] = useState('')
	const [resultado, setResultado] = useState('')

	return(
		<form>
			<FrmPeso peso={peso} setPeso={setPeso}/>
			<FrmAltura altura={altura} setAltura={setAltura}/>
			<FrmCalcular peso={peso} altura={altura} setResultado={setResultado}/>
			<FrmResultado resultado={resultado}/>
			<TabelaIMC/>
		</form>
	)
}