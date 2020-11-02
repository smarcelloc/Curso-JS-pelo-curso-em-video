const readline = require("readline");

class Pessoa {
  constructor() {
    this.nome = String;
    this.idade = Number;
    this.peso = Number;
  }
}

const pessoa = new Pessoa();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputNome = () => {
  return new Promise((resolve, reject) => {
    terminal.question("Informe o seu nome: ", (resposta) => {
      pessoa.nome = resposta;
      resolve();
    });
  });
};

const inputIdade = () => {
  return new Promise((resolve, reject) => {
    terminal.question("Informe a sua idade: ", (resposta) => {
      const idade = Number.parseInt(resposta);
      resolve(idade);
    });
  });
};

const inputPeso = () => {
  return new Promise((resolve, reject) => {
    terminal.question("Informe o seu peso: ", (resposta) => {
      pessoa.peso = Number(parseFloat(resposta).toFixed(1));
      resolve();
    });
  });
};

const main = async () => {
  await inputNome();
  pessoa.idade = await inputIdade();
  await inputPeso();
  terminal.close();

  console.log(pessoa);
};

main();
