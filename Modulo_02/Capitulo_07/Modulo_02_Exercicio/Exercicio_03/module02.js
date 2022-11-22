"use strict";
/* EXERCÍCIO 3
  TODO: No código a seguir, implemente um tipo de enum chamado Season que representa
  as constantes 'Outono', 'Inverno', 'Primavera' e 'Verão'. Em seguida, atualize a função para que
  você pode passar na temporada referenciando um item no enum, por exemplo
  Season.Fall, em vez da cadeia de caracteres literal 'Fall'. */
exports.__esModule = true;
var Estacao;
(function (Estacao) {
    Estacao[Estacao["Outono"] = 0] = "Outono";
    Estacao[Estacao["Inverno"] = 1] = "Inverno";
    Estacao[Estacao["Primavera"] = 2] = "Primavera";
    Estacao[Estacao["Verao"] = 3] = "Verao";
})(Estacao || (Estacao = {}));
function temporadasDoAno(estacao) {
    var mesDaEstacao;
    switch (estacao) {
        case Estacao.Outono:
            mesDaEstacao = "Março a Junho";
            break;
        case Estacao.Inverno:
            mesDaEstacao = "Junho a Setembro";
            break;
        case Estacao.Primavera:
            mesDaEstacao = "Setembro a Dezembro";
            break;
        case Estacao.Verao:
            mesDaEstacao = "Dezembro a Março";
    }
    return mesDaEstacao;
}
console.log(temporadasDoAno(Estacao.Outono));
