"use strict";
// 06 - Definição de tipos de variáveis personalizados
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('Meu número é: ', 5));
console.log(somarValores('1', '5'));
console.log(somarValores('Meu nome é: ', 'Giulia'));
