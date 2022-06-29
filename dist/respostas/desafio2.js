"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Trabalho.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Trabalho.Atriz
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 49,
    profissao: Trabalho.Padeiro
};
