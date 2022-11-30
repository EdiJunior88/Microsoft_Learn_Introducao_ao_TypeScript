"use strict";
//type calculo = (x: number, y: number) => number;
exports.__esModule = true;
var somaNumero = function (x, y) { return x + y; };
var subtracaoNumero = function (x, y) { return x - y; };
console.log(somaNumero(1, 2));
console.log(subtracaoNumero(1, 2));
var calculoTotal = function (operacao) {
    if (operacao === "add") {
        return somaNumero;
    }
    else {
        return subtracaoNumero;
    }
};
console.log(calculoTotal("add")(1, 2));
