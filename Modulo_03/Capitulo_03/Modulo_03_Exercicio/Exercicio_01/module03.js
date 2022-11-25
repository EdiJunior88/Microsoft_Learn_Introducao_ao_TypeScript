"use strict";
exports.__esModule = true;
var meuSorvete = {
    sabor: "vanilla",
    colheres: 2
};
console.log(meuSorvete.sabor);
function muitasColheres(sobremesa) {
    if (sobremesa.colheres >= 4) {
        return sobremesa.colheres + "x é muita colher de sorvete!";
    }
    else {
        return "Seu pedido estará pronto em breve!";
    }
}
console.log(muitasColheres({
    sabor: "vanilla",
    colheres: 5
}));
