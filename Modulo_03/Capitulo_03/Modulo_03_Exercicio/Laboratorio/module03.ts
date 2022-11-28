/* Módulo 3: Implementar interfaces em TypeScript
   Início do laboratório */

/*  EXERCÍCIO 1
    LISTA: Declare a interface Loan. */
interface emprestimo {
  principal: number;
  taxaJuros: number; //* Porcentagem da taxa de juros (por exemplo, 14 é 14%)
}

/* TODO: Declara a interface emprestimoConvencional. */
interface emprestimoConvencional extends emprestimo {
  meses: number; //* Número total de meses
}

/* TODO: Atualize a função calcularPagamentoEmprestimoJuros. */
function calcularPagamentoEmprestimoJuros(
  termosEmprestimo: emprestimo
): string {
  // Calcula o pagamento mensal de um empréstimo apenas com juros
  let juros: number = termosEmprestimo.taxaJuros / 1200; // Calcula a Taxa de Juros Mensais do empréstimo
  let pagamento: number;
  pagamento = termosEmprestimo.principal * juros;
  
  return "O pagamento do empréstimo apenas com juros é R$" + pagamento.toFixed(2);
}

/* TODO: Atualize a função calcularPagamentoEmprestimoConvencional. */
function calcularPagamentoEmprestimoConvencional(
  termosEmprestimo: emprestimoConvencional
): string {
  // Calcula o pagamento mensal de um empréstimo convencional
  let juros: number = termosEmprestimo.taxaJuros / 1200; // Calcula a Taxa de Juros Mensais do empréstimo
  let pagamento: number;
  pagamento =
    (termosEmprestimo.principal * juros) /
    (1 - Math.pow(1 / (1 + juros), termosEmprestimo.meses));

  return "O pagamento do empréstimo convencional é R$" + pagamento.toFixed(2);
}

let pagamentoSomenteJuros = calcularPagamentoEmprestimoJuros({
  principal: 30000,
  taxaJuros: 5,
});

let pagamentoConvencional = calcularPagamentoEmprestimoConvencional({
  principal: 30000,
  taxaJuros: 5,
  meses: 180,
});

console.log(pagamentoSomenteJuros); //* Retorna "O pagamento do empréstimo apenas com juros é de 125,00"
console.log(pagamentoConvencional); //* Retorna "O pagamento do empréstimo convencional é 237,24"

export {};
