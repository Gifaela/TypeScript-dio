"use strict";
// 10 - Any está de volta sobre unknown
let anyEstaDeVolta;
anyEstaDeVolta = true;
anyEstaDeVolta = "dois";
anyEstaDeVolta = 2;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknowValor;
unknowValor = 2;
unknowValor = false;
unknowValor = 'dois';
let stringTest2 = 'verifiacar';
// stringTest2 = unknowValor; // não aceita valor any, e para aceitar, é necessário fazer uma validação
if (typeof unknowValor === "string") {
    stringTest2 = unknowValor;
}
