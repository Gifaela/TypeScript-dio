"use strict";
// 09 - Incluindo callback em funções
function somaValoresNumericosTratar(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(num) {
    return num * num;
}
function dividirPorEleMesmo(num) {
    return num / num;
}
console.log(somaValoresNumericosTratar(1, 3, aoQuadrado));
console.log(somaValoresNumericosTratar(1, 3, dividirPorEleMesmo));
