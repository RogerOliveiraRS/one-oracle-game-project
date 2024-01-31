let listaNumerosJaGerados = [];
let limiteDeRodadas = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

  
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas =  `Você Descobiru o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O Número é menor');
        } else {
            exibirTextoNaTela('p', 'O Número é maior');
        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }

    
}

function gerarNumeroAleatorio() {
   let numeroEscolhidoParaRodada =  parseInt(Math.random() * limiteDeRodadas + 1);
   let quantidadeDeElementosdaLista = listaNumerosJaGerados.length;

   if (quantidadeDeElementosdaLista == limiteDeRodadas) {
    listaNumerosJaGerados.length = 0;
   }

   // Se está INCLUÍDO na Lista de números já gerados o NÚMERO ESCOLHIDO para a rodada nova, então:
   if(listaNumerosJaGerados.includes(numeroEscolhidoParaRodada)) {
    
    return gerarNumeroAleatorio();
    } else {
        listaNumerosJaGerados.push(numeroEscolhidoParaRodada);
       
       
        console.log(listaNumerosJaGerados);
        
        return numeroEscolhidoParaRodada;    
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

