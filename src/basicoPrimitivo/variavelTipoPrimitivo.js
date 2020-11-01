var tipoVar = 0;
let tipoLet = 1;
const tipoConstante = 2;

const name = "Fernando Carlos";
const idade = 20;
const sexo = "m";
const altura = 1.9;
const ativoNoSistema = true;

/**
 * Enum de DATA
 */
const data = {
  ANO: 1996,
  MES: 02,
  DIA: 19,
  HORARIO: {
    HORA: 08,
    MINUTO: 23,
    SEGUNDO: 10,
    MILISSEGUNDO: 30,
  },
};

/**
 * Definindo data em JS
 */
const dataDeNascimento = new Date(
  data.ANO,
  data.MES,
  data.DIA,
  data.HORARIO.HORA,
  data.HORARIO.MINUTO,
  data.HORARIO.MILISSEGUNDO
);

console.log("Variável:", "name", "Valor:", name, "Tipo:", typeof name);
console.log("Variável:", "idade", "Valor:", idade, "Tipo:", typeof idade);
console.log("Variável:", "sexo", "Valor:", sexo, "Tipo:", typeof sexo);
console.log("Variável:", "altura", "Valor:", altura, "Tipo:", typeof altura);
console.log(
  "Variável:",
  "ativoNoSistema",
  "Valor:",
  ativoNoSistema,
  "Tipo:",
  typeof ativoNoSistema
);
console.log("ENUM Variável:", "data", "Valor:", data, "Tipo:", typeof data);
console.log(
  "Variável:",
  "dataDeNascimento",
  "Valor:",
  dataDeNascimento,
  "Tipo:",
  typeof dataDeNascimento
);
