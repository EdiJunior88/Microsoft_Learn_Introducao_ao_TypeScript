//type calculo = (x: number, y: number) => number;

interface Calculo {
  (x: number, y: number): number;
}

let somaNumero: Calculo = (x: number, y: number) => x + y;
let subtracaoNumero: Calculo = (x: number, y: number) => x - y;

console.log(somaNumero(1, 2));
console.log(subtracaoNumero(1, 2));

let calculoTotal = (operacao: "add" | "subtract"): Calculo => {
  if (operacao === "add") {
    return somaNumero;
  } else {
    return subtracaoNumero;
  }
};

console.log(calculoTotal("add")(1, 2));

export {};
