interface Sorvete {
  sabor: string;
  colheres: number;
  instrucoes?: string;
}

let meuSorvete: Sundae = {
  sabor: "vanilla",
  colheres: 2,
  cobertura: "caramelo",
  milkshake: true,
};

interface Sundae extends Sorvete {
  cobertura: "chocolate" | "caramelo" | "morango";
  milkshake?: boolean;
  whippedCream?: boolean;
  instrucoes?: string;
}

function muitasColheres(sobremesa: Sundae) {
  if (sobremesa.colheres >= 4) {
    return sobremesa.colheres + "x é muita colher de sorvete!";
  } else {
    return "Seu pedido estará pronto em breve!";
  }
}

console.log(
  muitasColheres({
    sabor: "vanilla",
    colheres: 5,
    cobertura: "caramelo",
  })
);

export {};
