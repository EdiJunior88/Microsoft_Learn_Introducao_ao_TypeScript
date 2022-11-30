let adicionaTresNumeros = (x: number, y: number, z?: number): number => {
  if(z === undefined) {
      return x + y;
  } else {
      return x + y + z;
  }
}

console.log(adicionaTresNumeros(10, 20, 30));

export {};
