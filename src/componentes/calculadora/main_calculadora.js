/* DESAFIO
	1. Impedir digitação consecutiva de operadores
	2. Se um ponto é inserido, ele não pode ser repetido em outro lugar dentro do mesmo número
	Obs: O SEGUNDO FUNCIONOU AAAAAAAAAAA, usei regex 
*/

import React, {useState} from 'react'
import AddDigitoTela from './addDigitoTela'

export default function Calculadora(){
	// ESTILOS
	// container geral
	const cssContainer = {
		margin: 'auto',
		marginTop: '10vh',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'column',
		width: '300px',
		border: '1px solid #000'
	}

	// botões da calculadora
	const cssBotoes = {
		flexDirection: 'row',
		flexWrap: 'wrap',
	}

	// tela operacao/resultado
	const cssTela = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		flexDirection: 'column',
		width: '260px',
		padding: '0 20px',
		backgroundColor: '#444'
	}

	// tela de operação
	const cssTelaOpe = {
		fontSize: '25px',
		color: '#FFF',
		height: '20px'
	}

	// tela de resultado
	const cssTelaRes = {
		fontSize: '50px',
		color: '#FFF'
	}

	// botão
	const cssBtn = {
		fontSize: '30px',
		height: '75px',
		width: '75px',
		padding: '20px',
		backgroundColor: '#000',
		color: '#FFF',
		borderColor: '#000',
		textAlign: 'center',
		outline: 'none'
	}

	// -------------------------

	// STATES
	const [valorTela, setValorTela] = useState('')
	const [resultado, setResultado] = useState(0)
	const [acumulador, setAcumulador] = useState(0)
	const [operado, setOperado] = useState(false)

	// -------------------------

	// COMPONENTES
	// tela da calculadora com linhas de operação e resultado
	// tela (conta e resultado)
	const Tela = (val, res) => { // params states: valorTela e resultado
		return(
			<div style={cssTela}>
				{/* linha de operação */}
				<span style={cssTelaOpe}>{val}</span>
				{/* linha de resultado */}
				<span style={cssTelaRes}>{res}</span>
			</div>
		)
	}

	// Botão
	const Btn = (label, onClick) => <button style={cssBtn} onClick={onClick}>{label}</button>
	
	// -------------------------
	
	// FUNÇÕES
	// adiciona os dígitos
	/*const AddDigitoTela = (d) => {

		// trecho que impede operadores seguidos (menos * por causa de potência)
		// pega o último dígito na tela
		const ultDig = valorTela[(valorTela.length)-1];
		// último dígito é operador
		let ultDigOpe = false;
		// dígito atual (parâmetro) é operador
		let dOpe = false;
		// testa se o último dígito na tela é operador (incluindo potência)
		if(ultDig === '+' || ultDig === '-' || valorTela.substring(valorTela.length-2) === '**' || ultDig === '/') ultDigOpe = true;
		// testa se o dígito atual é operador
		if(d === '+' || d === '-' || d === '*' || d === '/') dOpe = true;
		// se o último dígito na tela e o atual forem operadores, não insere
		if(ultDigOpe && dOpe) return;

		// trecho que impede repetição de . no mesmo número
		// regex que separa valor tela a cada operador
		let valTelaSplit = valorTela.split(/(\+|\-|\*|\/)/g)
		// impede . se o dígito for . e o número atual já tiver .
		if(d === '.' && valTelaSplit[valTelaSplit.length - 1].includes('.')) return;

		// insere operador
		if((d === '+' || d === '-' || d === '*' || d === '/') && operado){ // operado é state bool
			// quando é operado, o valor deste vira true, passando para false para continuar o funcionamento da calculadora:
			setOperado(false);
			setValorTela(resultado + d);
			return; // para a função
		}

		// insere dígito números e ponto
		if(operado){
			setValorTela(d);
			// operado === false para continuar o funcionamento da calculadora
			setOperado(false);
			return; // para a função
		}

		// mostra toda a conta (?)
		const valorDigitadoTela = valorTela + d;
		setValorTela(valorDigitadoTela);
	} // AddDigitoTela()*/

	// limpa tudo
	const LimparMemoria = () => {
		setOperado(false)
		setValorTela('')
		setResultado(0)
		setAcumulador(0)
		return  // para a função
	} // LimparMemoria()

	// recebe backspace e analisa erro na operação
	const Operacao = (ope) => { // ope === tipo de operação
		if(ope === 'bs'){ // bs === backspace
			let vTela = valorTela // state
			vTela = vTela.substring(0, vTela.length - 1)
			setValorTela(vTela)
			setOperado(false)
			return // para a função
		} // if backspace

		// teste caso dê erro na operação
		try{
			// cálculo:
			const r = eval(valorTela) // r === resultado;
			setAcumulador(r)
			setResultado(r)
			setOperado(true)
		} catch{
			setResultado('ERRO')
		} // try/catch
	} // Operacao()

	// -------------------------

	return(
		<div style={cssContainer}>
			<AddDigitoTela valorTela={valorTela} setValorTela={setValorTela} operado={operado} setOperado={setOperado} resultado={resultado}/>
			<h3>Calculadora Matemática Simples</h3>
			{Tela(valorTela, resultado)}
			{/* Botões da calculadora */}
			<div style={cssBotoes}>
				{/* botão AC que limpa a memória */}
				{Btn('AC', LimparMemoria)}
				{Btn('(', ()=><AddDigitoTela d='('/>)}
				{Btn(')', ()=>AddDigitoTela(')'))}
				{Btn('/', ()=>AddDigitoTela('/'))}
				{Btn('7', ()=>AddDigitoTela('7'))}
				{Btn('8', ()=>AddDigitoTela('8'))}
				{Btn('9', ()=>AddDigitoTela('9'))}
				{Btn('*', ()=>AddDigitoTela('*'))}
				{Btn('4', ()=>AddDigitoTela('4'))}
				{Btn('5', ()=>AddDigitoTela('5'))}
				{Btn('6', ()=>AddDigitoTela('6'))}
				{Btn('-', ()=>AddDigitoTela('-'))}
				{Btn('3', ()=>AddDigitoTela('3'))}
				{Btn('2', ()=>AddDigitoTela('2'))}
				{Btn('1', ()=>AddDigitoTela('1'))}
				{Btn('+', ()=>AddDigitoTela('+'))}
				{Btn('0', ()=>AddDigitoTela('0'))}
				{Btn('.', ()=>AddDigitoTela('.'))}
				{Btn('<-', ()=>Operacao('bs'))}
				{Btn('=', ()=>Operacao('='))}
			</div>
		</div>
	) // return
} // App