const readline = require("readline");

class Pessoa {
  constructor() {
    this.nome;
    this.idade;
    this.altura;
  }
}

const pessoa = new Pessoa();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question("Informe o seu nome: ", (resposta) => {
  pessoa.nome = resposta;
  terminal.close();
});