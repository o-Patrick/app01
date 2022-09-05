// O objetivo era componentizar a calculadora, mas não consegui

import React from 'react';

// tentativa de passar a func praticamente como está e fazer a chamada no JSX (ver como passar os parâmetros props e d)
// adiciona os dígitos
export default function AddDigitoTela(props){
	const Btn = props.Btn

	const AddDigitoTela = (props, d) => {
		// variáveis recebendo os props
		const valorTela = props.valorTela
		const setValorTela = props.setValorTela
		const operado = props.operado
		const setOperado = props.setOperado
		const resultado = props.resultado

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
	} // AddDigitoTela()

	return(
		<section>
			{/* Botões da calculadora */}
			<div style={''}>
				{/* botão AC que limpa a memória */}
				{/* {Btn('AC', LimparMemoria)} */}
				{Btn('(', ()=>AddDigitoTela(props, '('))}
				{Btn(')', ()=>AddDigitoTela(props, ')'))}
				{Btn('/', ()=>AddDigitoTela(props, '/'))}
				{Btn('7', ()=>AddDigitoTela(props, '7'))}
				{Btn('8', ()=>AddDigitoTela(props, '8'))}
				{Btn('9', ()=>AddDigitoTela(props, '9'))}
				{Btn('*', ()=>AddDigitoTela(props, '*'))}
				{Btn('4', ()=>AddDigitoTela(props, '4'))}
				{Btn('5', ()=>AddDigitoTela(props, '5'))}
				{Btn('6', ()=>AddDigitoTela(props, '6'))}
				{Btn('-', ()=>AddDigitoTela(props, '-'))}
				{Btn('3', ()=>AddDigitoTela(props, '3'))}
				{Btn('2', ()=>AddDigitoTela(props, '2'))}
				{Btn('1', ()=>AddDigitoTela(props, '1'))}
				{Btn('+', ()=>AddDigitoTela(props, '+'))}
				{Btn('0', ()=>AddDigitoTela(props, '0'))}
				{Btn('.', ()=>AddDigitoTela(props, '.'))}
				{/* {Btn('<-', ()=>Operacao('bs'))}
				{Btn('=', ()=>Operacao('='))} */}
			</div>

			{/*{
				// nem sei explicar, mas sim
				(props) => {
					const AddDigitoTela = (props, d) => {
					// trecho que impede operadores seguidos (menos * por causa de potência)
					// pega o último dígito na tela
					const ultDig = props.valorTela[(props.valorTela.length)-1];
					// último dígito é operador
					let ultDigOpe = false;
					// dígito atual (parâmetro) é operador
					let dOpe = false;
					// testa se o último dígito na tela é operador (incluindo potência)
					if(ultDig === '+' || ultDig === '-' || props.valorTela.substring(props.valorTela.length-2) === '**' || ultDig === '/') ultDigOpe = true;
					// testa se o dígito atual é operador
					if(props.d === '+' || props.d === '-' || props.d === '*' || props.d === '/') dOpe = true;
					// se o último dígito na tela e o atual forem operadores, não insere
					if(ultDigOpe && dOpe) return;

					// trecho que impede repetição de . no mesmo número
					// regex que separa valor tela a cada operador
					let valTelaSplit = props.valorTela.split(/(\+|\-|\*|\/)/g)
					// impede . se o dígito for . e o número atual já tiver .
					if(props.d === '.' && valTelaSplit[valTelaSplit.length - 1].includes('.')) return;

					// insere operador
					if((props.d === '+' || props.d === '-' || props.d === '*' || props.d === '/') && props.operado){ // props.operado é state bool
						// quando é props.operado, o valor deste vira true, passando para false para continuar o funcionamento da calculadora:
						props.setOperado(false);
						props.setValorTela(props.resultado + props.d);
						return; // para a função
					}

					// insere dígito números e ponto
					if(props.operado){
						props.setValorTela(props.d);
						// props.operado === false para continuar o funcionamento da calculadora
						props.setOperado(false);
						return; // para a função
					}

					// mostra toda a conta (?)
					const valorDigitadoTela = props.valorTela + props.d;
					props.setValorTela(valorDigitadoTela);
					}
				} // arrow func
			}*/} {/* {} js dentro de jsx */}
		</section> // jsx
	) // return
} // AddDigitoTela()