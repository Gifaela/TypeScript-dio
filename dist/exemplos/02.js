"use strict";
// 02 - Recriando a mesma aplicação simples com TS
// (comentado para não dar interferencia com o 03.ts)
Object.defineProperty(exports, "__esModule", { value: true });
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somaNumeros(num1, num2) {
    return num1 + num2;
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somaNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}
