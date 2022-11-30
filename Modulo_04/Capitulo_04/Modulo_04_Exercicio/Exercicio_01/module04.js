"use strict";
exports.__esModule = true;
var adicionaTresNumeros = function (x, y, z) {
    if (z === undefined) {
        return x + y;
    }
    else {
        return x + y + z;
    }
};
console.log(adicionaTresNumeros(10, 20, 30));
