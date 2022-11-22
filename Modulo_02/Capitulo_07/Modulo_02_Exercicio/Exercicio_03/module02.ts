/* EXERCÍCIO 3
  TODO: No código a seguir, implemente um tipo de enum chamado Season que representa
  as constantes 'Outono', 'Inverno', 'Primavera' e 'Verão'. Em seguida, atualize a função para que
  você pode passar na temporada referenciando um item no enum, por exemplo
  Season.Fall, em vez da cadeia de caracteres literal 'Fall'. */

enum Estacao {
  Outono,
  Inverno,
  Primavera,
  Verao,
}

function temporadasDoAno(estacao: Estacao) {
  let mesDaEstacao: string;
  
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

export {};
