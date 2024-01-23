class Time {
    constructor(nome) {
        this.nome = nome;
    }
}

class SaoPauloFC extends Time {
    jogar() {
        return "São Paulo está em campo!";
    }
}

class Corinthians extends Time {
    jogar() {
        return "Corinthians está em campo!";
    }
}

const saoPaulo = new SaoPauloFC("São Paulo FC");
const corinthians = new Corinthians("Corinthians");

console.log(saoPaulo.nome + ": " + saoPaulo.jogar());
console.log(corinthians.nome + ": " + corinthians.jogar());
