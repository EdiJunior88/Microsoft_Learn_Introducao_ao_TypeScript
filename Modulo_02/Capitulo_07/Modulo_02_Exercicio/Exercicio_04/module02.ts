/* EXERCÍCIO 4
  TODO: Declare a matriz como o tipo para corresponder ao tipo dos itens na matriz. */

let numeroRandomico: number[] = [];
let proximoNumero: number;

for (let i = 0; i < 10; i++) {
  proximoNumero = Math.floor(Math.random() * (100 - 1)) + 1;
  numeroRandomico.push(proximoNumero);
}

console.log(numeroRandomico);

export {};
