/* ainda não funciona, mas tentar:
		Obs: o parâmetro props.d não existe, porque d era argumento da função, então procurar outra forma de passá-lo
		1. componente em main_calculadora.js com fechamento </>
		2. criar elemento em head para index.html
*/ 
import React from 'react';

// adiciona os dígitos
export default function AddDigitoTela(props){
	return(
		<>
			{
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
			} {/* {} js dentro de jsx */}
		</> // jsx
	) // return
} // AddDigitoTela()