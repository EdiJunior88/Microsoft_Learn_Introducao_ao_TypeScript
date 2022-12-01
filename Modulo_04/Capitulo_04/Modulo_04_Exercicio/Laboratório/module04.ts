/* Módulo 4: Desenvolver funções tipadas usando TypeScript
  Fim do laboratório */

/* EXERCÍCIO 1
  TODO: Declare um novo tipo de função para as funções sortDescending e sortAscending. */

type comparandoFuncaoTipo = (a: number, b: number) => number;

/* TODO: Converter as funções sortDescending e sortAscending em seta
Funções. */

/* sorteioDescendente é uma função de comparação que informa ao método de como classificar números em ordem decrescente */
let sorteioDescendente: comparandoFuncaoTipo = (a, b) => {
  if (a > b) {
    return -1;
  } else if (b > a) {
    return 1;
  } else {
    return 0;
  }
};

/* sorteioAscendente é uma função de comparação que informa ao método de como classificar números em ordem crescente. */
let sorteioAscendente: comparandoFuncaoTipo = (a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
};

/* A função construirMatriz cria uma matriz de números aleatórios exclusivos contendo o número de itens com base no número passado a ele. O parâmetro sorteioPorOrdem determina se deseja classificar a matriz em ordem crescente ou decrescente. */

/* TODO: Atualize a função construirMatriz. */

function construirMatriz(
  items: number,
  sorteioPorOrdem: "ascendente" | "descending"
): number[] {
  let numerosRandomicos: number[] = [];
  let proximoNumero: number;

  for (let contador = 0; contador < items; contador++) {
    proximoNumero = Math.ceil(Math.random() * (100 - 1));

    if (numerosRandomicos.indexOf(proximoNumero) === -1) {
      numerosRandomicos.push(proximoNumero);
    } else {
      contador--;
    }
  }

  if (sorteioPorOrdem === "ascendente") {
    return numerosRandomicos.sort(sorteioAscendente);
  } else {
    return numerosRandomicos.sort(sorteioDescendente);
  }
}

let meuArray1 = construirMatriz(12, "ascendente");
let meuArray2 = construirMatriz(8, "descending");

console.log(meuArray1);
console.log(meuArray2);

/* EXERCÍCIO 2
  TODO: Atualize a função LoanCalculator. */

function calculadoraEmprestimo(
  principal: number,
  taxaJuros: number,
  mes = 12
): string {
  let juros: number = taxaJuros / 1200; //Calcula a taxa de juros mensal
  let pagamento: number;
  pagamento = (principal * juros) / (1 - Math.pow(1 / (1 + juros), mes));
  return pagamento.toFixed(2);
}

let meuEmprestimo = calculadoraEmprestimo(1000, 5);

console.log(meuEmprestimo);

export {};
