interface Sorvete {
  sabor: string;
  colheres: number;
  instructions?: string;
}

let meuSorvete: Sorvete = {
  sabor: "vanilla",
  colheres: 2,
};

console.log(meuSorvete.sabor);

function muitasColheres(sobremesa: Sorvete) {
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
  })
);

export {};
