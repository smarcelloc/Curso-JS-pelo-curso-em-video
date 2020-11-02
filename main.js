const fs = require("fs");
const readline = require("readline");
const browser = require("opn");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cursos = [
  {
    modulo: String,
    aulas: [String],
  },
];

function main() {
  lerArquivosListarCursos();
  mensagemOpcaoCurso();
  usuarioEscolherModuloCurso();
}

function lerArquivosListarCursos() {
  try {
    const path = `${__dirname}/src`;
    const modulos = fs.readdirSync(path);

    modulos.forEach((modulo) => {
      const aulas = fs.readdirSync(`${path}/${modulo}`);
      cursos.push({ modulo, aulas });
    });
  } catch (error) {
    throw error;
  }
}

function mensagemOpcaoCurso() {
  terminal.write("Veja os módulos do nosso sistema:\n\n");
  for (let index = 1; index < cursos.length; index++) {
    terminal.write(`[${index}] - ${cursos[index].modulo}\n`);
  }
  terminal.write("[0] - Sair da aplicação\n");
}

function usuarioEscolherModuloCurso() {
  terminal.question("Qual modulo você deseja selecionar: ", (resposta) => {
    const opcao = parseInt(resposta, 10);
    if (opcao == 0) {
      process.exit(0);
    } else if (cursos[opcao] == undefined) {
      throw new Error("[ERRO] Não encontramos este módulo.");
    } else {
      mostrarAulasAoUsuario(opcao);
      usuarioEscolherAulaCurso(opcao);
    }
  });
}

function mostrarAulasAoUsuario(opcao) {
  const aulas = cursos[opcao].aulas;
  terminal.write("\nAs aulas:\n");
  for (let index = 0; index < aulas.length; index++) {
    terminal.write(`[${index + 1}] - ${aulas[index]}\n`);
  }
  terminal.write("[0] - Voltar aos módulos do curso\n");
}

function usuarioEscolherAulaCurso(opcao) {
  terminal.question("Qual modulo você deseja selecionar: ", (resposta) => {
    const opcaoAula = parseInt(resposta, 10) - 1;
    if (opcaoAula < 0) {
      recomecarMain();
    } else if (cursos[opcao].aulas[opcaoAula] == undefined) {
      throw new Error("[ERRO] Não encontramos esta aula.");
    } else {
      definicaoExecucaoDoCurso(opcao, opcaoAula);
    }
  });
}

function recomecarMain() {
  cursos = [
    {
      modulo: String,
      aulas: [String],
    },
  ];
  main();
}

function definicaoExecucaoDoCurso(opcao, opcaoAula) {
  try {
    const cursoEscolhido = cursos[opcao].modulo;
    const aulaEscolhido = cursos[opcao].aulas[opcaoAula];
    const pathFile = `${__dirname}/src/${cursoEscolhido}/${aulaEscolhido}`;
    terminal.write("Estamos executando com sucesso.\n\n");
    tipoDeArquivoParaExecutar(pathFile, aulaEscolhido);
  } catch (error) {
    throw error;
  }
}

function tipoDeArquivoParaExecutar(pathFile, aulaEscolhido) {
  const tipoDeArquivo = String(aulaEscolhido).split(".").pop();
  switch (tipoDeArquivo) {
    case "js":
      terminal.close();
      require(pathFile);
      break;
    case "html":
      browser(pathFile);
      terminal.write("Abrindo o navegador padrão ...\n");
      process.exit(0);
    default:
      throw new Error("[ERROR] Não suportamos este tipo de arquivo");
  }
}

main();
