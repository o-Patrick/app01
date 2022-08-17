/* Desafio: criar resposta para empate e componentizar
	Obs: resolvi um erro que algum vencedor era declarado, não sendo feita sequência de três números, ou mesmo se fosse impossível vencer
	(pesquisar por 'autoral') para encontrar estas coisas
*/

import React, {useState} from 'react'

export default function JogoDaVelha(){
	// ESTILOS
	// tabuleiro
	const cssTabu = {
		display: 'flex',
		flexDirection: 'column'
	}

	// linha tabuleiro
	const cssTabuLinha = {
		display: 'flex',
		flexDirection: 'row'
	}

	// cada casa
	const cssCasa = {
		width: '100px',
		height: '100px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		cursor: 'pointer',
		fontSize: '60px',
		border: '1px solid #000'
	}

	// indica o início do jogo e toda vez que for feita uma nova jogada
	const jogoInicial = [['', '', ''], ['', '', ''], ['', '', '']]

	// controla o jogo em si
	const [jogo, setJogo] = useState([['', '', ''], ['', '', ''], ['', '', '']])

	// define o símbolo atual se O ou X (padrão)
	const [simboloAtual, setSimboloAtual] = useState('X')

	// indica se o jogo está acontecendo (impede que o jogo continue caso já haja um vencedor)
	const [jogando, setJogando] = useState(true)

	// o tabuleiro em si
	const tabuleiro = (j) => { // recebe state jogo
		return(
			<div style={cssTabu}> {/* tabuleiro */}
				<div style={cssTabuLinha}> {/* linha */}
					<div style={cssCasa} data-pos='00' onClick={(e)=>jogar(e)}>{j[0][0]}</div> {/* casa */}
					<div style={cssCasa} data-pos='01' onClick={(e)=>jogar(e)}>{j[0][1]}</div> {/* casa */}
					<div style={cssCasa} data-pos='02' onClick={(e)=>jogar(e)}>{j[0][2]}</div> {/* casa */}
				</div>
				<div style={cssTabuLinha}> {/* linha */}
					<div style={cssCasa} data-pos='10' onClick={(e)=>jogar(e)}>{j[1][0]}</div> {/* casa */}
					<div style={cssCasa} data-pos='11' onClick={(e)=>jogar(e)}>{j[1][1]}</div> {/* casa */}
					<div style={cssCasa} data-pos='12' onClick={(e)=>jogar(e)}>{j[1][2]}</div> {/* casa */}
				</div>
				<div style={cssTabuLinha}> {/* linha */}
					<div style={cssCasa} data-pos='20' onClick={(e)=>jogar(e)}>{j[2][0]}</div> {/* casa */}
					<div style={cssCasa} data-pos='21' onClick={(e)=>jogar(e)}>{j[2][1]}</div> {/* casa */}
					<div style={cssCasa} data-pos='22' onClick={(e)=>jogar(e)}>{j[2][2]}</div> {/* casa */}
				</div>
			</div>
		) // return
	} // tabuleiro()

	const BtnJogarNovamente = () => {
		return <button type="button" onClick={()=>reiniciar()}>Reiniciar</button>
	}

	// percorre linhas, colunas e diagonais para X e O
	const verificaVitoria = () => {
		let pontos = 0
		let vitoria = false

		// verifica linhas; l === linha
		for(let l = 0; l < 3; l++){
			// zera a pontuação a cada linha
			pontos = 0
			// c = coluna
			for (let c = 0; c < 3; c++){
				if(jogo[l][c] === simboloAtual){
					pontos++
				} // if checa linha toda
			} // for coluna
			// autoral: zera a contagem na mudança de linha
			if(pontos !== 3){
				pontos = 0
			}
			// se vitória
			if(pontos === 3){
				vitoria = true
				// para o for linha no caso de vitória
				break
			} // if vitória
		} // verifica linha

		// verifica colunas; c === coluna
		for(let c = 0; c < 3; c++){
			// zera a pontuação a cada linha
			pontos = 0
			// l = linha
			for(let l = 0; l < 3; l++){
				if(jogo[l][c] === simboloAtual){
					pontos++
				} // if checa coluna toda
			} // for linha
			// autoral: zera a contagem na mudança de coluna
			if(pontos !== 3){
				pontos = 0
			}
			// se vitória
			if(pontos === 3){
				vitoria = true
				// para o for coluna no caso de vitória
				break
			} // if vitória
		} // verifica coluna

		// verifica diagonais; d === diagonais
		
		// verifica diagonal principal
		pontos = 0
		for(let d = 0; d < 3; d++){
			// as casas na diagonal principal têm as posições linha-coluna iguais
			if(jogo[d][d]){
				pontos++
			} // se casa na diagonal
			// autoral: zera a contagem na mudança de coluna
			if(pontos !== 3){
				pontos = 0
			}
			// if vitória
			if(pontos >= 3){
				vitoria = true
				break
			} // if vitória
		} // verifica diagonal principal

		// verifica diagonal secundária
		pontos = 0
		let l = 0
		for(let c = 2; c >= 0; c--){
			// se diagonal (l ==== c) tem símbolo atual
			if(jogo[l][c] === simboloAtual){
				pontos++
			}
			l++ // passa o loop para a próxima linha
			// autoral: zera a contagem na mudança de coluna
			if(pontos !== 3){
				pontos = 0
			}
			// if vitória
			if(pontos >= 3){
				vitoria = true
				break
			} // if vitória
		} // verifica diagonal secundária

		// autoral: conta as casas vazias para verificar empate
		let contEmpate = 0
		for(let l = 0; l < 3; l++){
			for(let c = 0; c < 3; c++){
				if(jogo[c][l] === 'X' || jogo[c][l] === 'O'){
					contEmpate++
				}
			}
		}

		// autoral: verifica empate
		if(contEmpate === 9 && !vitoria){
			vitoria = false
			trocaJogador()
			alert('Empate!')
			setJogando(false)
		}

		return vitoria
	} // verificaVitoria()

	const trocaJogador = () => simboloAtual === 'X' ? setSimboloAtual('O') : setSimboloAtual('X')

	// retorna posição
	const retPos = (e) => {
		// pega a posição da casa
		const p = e.target.getAttribute('data-pos')
		// 
		const pos = [parseInt(p.substring(0, 1)), parseInt(p.substring(1, 2))]
		return pos
	} // retPos()

	const verificaEspacoVazio = (e) => {
		// se a posição atual estiver vazia
		if(jogo[retPos(e)[0]][retPos(e)[1]] === ''){
			return true
		} else{
			return false
		}
	} // verificaEspacoVazio()

	// núcleo do jogo
	const jogar = (e) => {
		if(jogando){
			if(verificaEspacoVazio(e)){
				jogo[retPos(e)[0]][retPos(e)[1]] = simboloAtual
				trocaJogador()
				if(verificaVitoria()){
					trocaJogador()
					alert(`Jogador ${simboloAtual} venceu!`)
					setJogando(false)
				} // if verificaVitoria()
			} else{
				alert('Este espaço já está ocupado! Escolha outro')
			}

		} // if jogando
	} // jogar()

	const reiniciar = () => {
		setJogando(true)
		setJogo(jogoInicial)
		setSimboloAtual('X')
	}

	return(
		<>
			<div>
				<p>Quem joga: {simboloAtual}</p>
			</div>
			<div>
				{tabuleiro(jogo)}
			</div>
			<div>
				{BtnJogarNovamente()}
			</div>
		</>
	) // return
} // App