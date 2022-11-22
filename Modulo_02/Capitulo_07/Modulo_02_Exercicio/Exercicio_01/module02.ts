/* Module 2: Declare variable types in TypeScript
   Lab start  */

/* EXERCÍCIO 1
  TODO: Modifique o código para adicionar tipos às declarações de variável.
  O JavaScript resultante deve ter a mesma aparência do exemplo original quando terminar. */

let nome: string;
let ultimoNome: string;
let nomeCompleto: string;
let idade: number;
let localizacao: boolean;

nome = "Rebecca";
ultimoNome = "Smith";
idade = 42;
localizacao = false;
nomeCompleto = nome + " " + ultimoNome;

if (localizacao) {
  console.log(
    "Meu nome é " +
      nomeCompleto +
      ", Tenho " +
      idade +
      " de idade, e moro na cidade de Maceió que fica em Alagoas."
  );
} else {
  console.log(
    "Meu nome é " +
      nomeCompleto +
      ", Tenho " +
      idade +
      " de idade, e não moro na cidade de Maceió que fica em Alagoas."
  );
}

export {};