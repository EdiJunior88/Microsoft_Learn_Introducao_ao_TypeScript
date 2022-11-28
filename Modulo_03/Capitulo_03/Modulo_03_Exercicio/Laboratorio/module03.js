"use strict";
/* Módulo 3: Implementar interfaces em TypeScript
   Início do laboratório */
exports.__esModule = true;
/* TODO: Atualize a função calcularPagamentoEmprestimoJuros. */
function calcularPagamentoEmprestimoJuros(termosEmprestimo) {
    // Calcula o pagamento mensal de um empréstimo apenas com juros
    var juros = termosEmprestimo.taxaJuros / 1200; // Calcula a Taxa de Juros Mensais do empréstimo
    var pagamento;
    pagamento = termosEmprestimo.principal * juros;
    return "O pagamento do empréstimo apenas com juros é R$" + pagamento.toFixed(2);
}
/* TODO: Atualize a função calcularPagamentoEmprestimoConvencional. */
function calcularPagamentoEmprestimoConvencional(termosEmprestimo) {
    // Calcula o pagamento mensal de um empréstimo convencional
    var juros = termosEmprestimo.taxaJuros / 1200; // Calcula a Taxa de Juros Mensais do empréstimo
    var pagamento;
    pagamento =
        (termosEmprestimo.principal * juros) /
            (1 - Math.pow(1 / (1 + juros), termosEmprestimo.meses));
    return "O pagamento do empréstimo convencional é R$" + pagamento.toFixed(2);
}
var pagamentoSomenteJuros = calcularPagamentoEmprestimoJuros({
    principal: 30000,
    taxaJuros: 5
});
var pagamentoConvencional = calcularPagamentoEmprestimoConvencional({
    principal: 30000,
    taxaJuros: 5,
    meses: 180
});
console.log(pagamentoSomenteJuros); //* Retorna "O pagamento do empréstimo apenas com juros é de 125,00"
console.log(pagamentoConvencional); //* Retorna "O pagamento do empréstimo convencional é 237,24"
