// RECURSIVA
function fatorial(numero) {
  if (numero <= 1) {
    return 1;
  }

  return numero * fatorial(numero - 1);
}

console.log(10, "! => ", fatorial(10));
console.log(2, "! => ", fatorial(2));