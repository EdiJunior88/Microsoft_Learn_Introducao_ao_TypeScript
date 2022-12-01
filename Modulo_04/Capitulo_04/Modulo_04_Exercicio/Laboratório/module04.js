"use strict";
/* Módulo 4: Desenvolver funções tipadas usando TypeScript
  Fim do laboratório */
exports.__esModule = true;
/* TODO: Converter as funções sortDescending e sortAscending em seta
Funções. */
/* sorteioDescendente é uma função de comparação que informa ao método de como classificar números em ordem decrescente */
var sorteioDescendente = function (a, b) {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
/* sorteioAscendente é uma função de comparação que informa ao método de como classificar números em ordem crescente. */
var sorteioAscendente = function (a, b) {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
/* A função construirMatriz cria uma matriz de números aleatórios exclusivos contendo o número de itens com base no número passado a ele. O parâmetro sorteioPorOrdem determina se deseja classificar a matriz em ordem crescente ou decrescente. */
/* TODO: Atualize a função construirMatriz. */
function construirMatriz(items, sorteioPorOrdem) {
    var numerosRandomicos = [];
    var proximoNumero;
    for (var contador = 0; contador < items; contador++) {
        proximoNumero = Math.ceil(Math.random() * (100 - 1));
        if (numerosRandomicos.indexOf(proximoNumero) === -1) {
            numerosRandomicos.push(proximoNumero);
        }
        else {
            contador--;
        }
    }
    if (sorteioPorOrdem === "ascendente") {
        return numerosRandomicos.sort(sorteioAscendente);
    }
    else {
        return numerosRandomicos.sort(sorteioDescendente);
    }
}
var meuArray1 = construirMatriz(12, "ascendente");
var meuArray2 = construirMatriz(8, "descending");
console.log(meuArray1);
console.log(meuArray2);
/* EXERCÍCIO 2
  TODO: Atualize a função LoanCalculator. */
function calculadoraEmprestimo(principal, taxaJuros, mes) {
    if (mes === void 0) { mes = 12; }
    var juros = taxaJuros / 1200; //Calcula a taxa de juros mensal
    var pagamento;
    pagamento = (principal * juros) / (1 - Math.pow(1 / (1 + juros), mes));
    return pagamento.toFixed(2);
}
var meuEmprestimo = calculadoraEmprestimo(1000, 5);
console.log(meuEmprestimo);
