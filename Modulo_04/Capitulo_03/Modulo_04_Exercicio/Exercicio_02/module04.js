"use strict";
exports.__esModule = true;
function sum(input) {
    var total = 0;
    for (var count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
sum([10, 5]);
