const readline = require("readline");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const jogadores = {
  usuario: Number,
  pc: Number,
};

const opcao = {
  1: "Pedra",
  2: "Papel",
  3: "Tesoura",
};

const escolhaDoPC = Math.round(Math.random() * 2) + 1;

terminal.write("Vamos jogar JOKENPOOOO\n\n");
terminal.write("As seguintes opções:\n");
for (const index in opcao) {
  terminal.write(`[${index}] ${opcao[index]}\n`);
}

terminal.question("\nQual sua jogada: ", (anwser) => {
  const escolhaDoUsuario = Number.parseInt(anwser);
  if (isNaN(escolhaDoUsuario) || escolhaDoUsuario < 1 || escolhaDoUsuario > 3) {
    throw new Error("[ERRO] Opção errada! Tenta novamente.").message;
  }

  alimentarObjetoJogadores(escolhaDoUsuario, escolhaDoPC);
  decisaoDoJogo();
  mostrarResultado();
  terminal.close();
});

function alimentarObjetoJogadores(escolhaDoUsuario, escolhaDoPC) {
  jogadores.usuario = escolhaDoUsuario;
  jogadores.pc = escolhaDoPC;
}

function decisaoDoJogo() {
  if (jogadores.usuario === 1 && jogadores.pc === 3) {
    terminal.write("Você ganhou!");
  } else if (jogadores.usuario === 1 && jogadores.pc === 2) {
    terminal.write("Você perdeu!");
  } else if (jogadores.usuario === 1 && jogadores.pc === 1) {
    terminal.write("Empatou!");
  }

  if (jogadores.usuario === 2 && jogadores.pc === 1) {
    terminal.write("Você ganhou!");
  } else if (jogadores.usuario === 2 && jogadores.pc === 3) {
    terminal.write("Você perdeu!");
  } else if (jogadores.usuario === 2 && jogadores.pc === 2) {
    terminal.write("Empatou!");
  }

  if (jogadores.usuario === 3 && jogadores.pc === 2) {
    terminal.write("Você ganhou!");
  } else if (jogadores.usuario === 3 && jogadores.pc === 1) {
    terminal.write("Você perdeu!");
  } else if (jogadores.usuario === 3 && jogadores.pc === 3) {
    terminal.write("Empatou!");
  }
}

function mostrarResultado() {
  terminal.write("\nResultado:\n");
  terminal.write(`-> Usuário: ${opcao[jogadores.usuario]}\n`);
  terminal.write(`-> PC: ${opcao[jogadores.pc]}`);
}
