let subtraiTresNumeros = (x: number, y: number, z = 100): number => x - y - z;

console.log(subtraiTresNumeros(10, 20)); // retorna -110 porque 'z' recebeu o valor 100
console.log(subtraiTresNumeros(10, 20, 15)); // retorna -25

export {};
