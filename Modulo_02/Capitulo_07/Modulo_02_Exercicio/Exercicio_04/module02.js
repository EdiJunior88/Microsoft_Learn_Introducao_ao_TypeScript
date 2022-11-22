"use strict";
/* EXERCÍCIO 4
  TODO: Declare a matriz como o tipo para corresponder ao tipo dos itens na matriz. */
exports.__esModule = true;
var numeroRandomico = [];
var proximoNumero;
for (var i = 0; i < 10; i++) {
    proximoNumero = Math.floor(Math.random() * (100 - 1)) + 1;
    numeroRandomico.push(proximoNumero);
}
console.log(numeroRandomico);
