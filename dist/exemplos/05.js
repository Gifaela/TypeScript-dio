"use strict";
// 05 - Sobre o tipo de variável any
let valorAny;
valorAny = 3,
    valorAny = "Amor",
    valorAny = true;
console.log(typeof (valorAny)); // boolean
let valoString = 'Teste';
console.log(typeof (valoString)); // string
valoString = valorAny;
console.log(typeof (valoString)); // boolean
let valoString2 = 'testão';
valoString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2); // true + true = 2
}
somarString(valoString, valoString2);
