class Jogador{
    constructor(simbolo){
        this.simbolo = simbolo;
    }
}

class JogoDaVelha{
    constructor(
        jogador1 = new Jogador('x'), 
        jogador2 = new Jogador('o') )
    {
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;

        this.jogadorAtual = jogador1;
        this.tamanho = 3;
        this.tabuleiro = this.#iniciarTabuleiro()
    }
    #iniciarTabuleiro(){
        return Array(this.tamanho)
            .fill(0)
            .map(() => Array(this.tamanho).fill(null)); 
    }
    toString(){
        let matriz = this.tabuleiro
        .map(linha => linha.map(posicao => posicao ?? "-").join(" ")).join("\n");
        return matriz
    }
}

const jogo = new JogoDaVelha()
console.log(jogo.toString())