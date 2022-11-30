"use strict";
exports.__esModule = true;
var subtraiTresNumeros = function (x, y, z) {
    if (z === void 0) { z = 100; }
    return x - y - z;
};
console.log(subtraiTresNumeros(10, 20)); // retorna -110 porque 'z' recebeu o valor 100
console.log(subtraiTresNumeros(10, 20, 15)); // retorna -25
