let numero = [3, 43, 4, 24];

console.log("Valores:", numero);
console.log("Posição:", numero.length);
console.log("Valor na posição 2:", numero[2]);

console.log();

// Mais Recomendável
for (const pos in numero) {
  console.log("Índice:", pos, "Valor:", numero[pos]);
}

let i = 0;
console.log();
numero.forEach((element) => {
  console.log("Índice:", i++, "Valor:", element);
});

console.log();
for (let pos = 0; pos < numero.length; pos++) {
  const element = numero[pos];
  console.log("Índice:", pos, "Valor:", element);
}

///////////////////////////////////////////////////////////////////
console.log();
const valor = 25;
const indexEncontrado = numero.findIndex((element) => element == valor);
const valorEncontrado = numero.find((element) => element == valor);
// Não encontrado
// indexEncontrado -1
// valorEncontrado undefined
console.log("Índice:", indexEncontrado, "Valor:", valorEncontrado);
///////////////////////////////////////////////////////////////////
console.log();
const valor02 = 24;
const indexEncontrado02 = numero.findIndex((element) => element == valor02);
const valorEncontrado02 = numero.find((element) => element == valor02);
// Foi encontrado
// indexEncontrado 3
// valorEncontrado 24
console.log("Índice:", indexEncontrado02, "Valor:", valorEncontrado02);
////////////////////////////////////////////////////////////////////
// MAIS RECOMENDAVEL PARA ENCONTRAR VALOR;
const indexNaoEncontrado = numero.indexOf(12);
const indexEncontrado03 = numero.indexOf(valor02);

console.log(
  "Index não encontrado:",
  indexNaoEncontrado,
  "Index encontrado: ",
  indexEncontrado03
);
