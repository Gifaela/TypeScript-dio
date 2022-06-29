"use strict";
// 07 - Definindo o tipo de retorno de uma função.
function somarValoresNumericos(num1, num2) {
    return num1 + num2;
    //   return num1 + num2.toString(); // erro por conta do ():number
}
console.log(somarValoresNumericos(4, 6)); // 46
