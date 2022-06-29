"use strict";
// 04 - Lidando com objetos, enum e interface
// (estrutura TS, comentado para não dar erro, e com .js para o watch gera um JS)
const giulia = {
    nome: 'Giulia',
    idade: 23,
    profissao: 'desenvolvedora'
};
const andrey = {
    nome: 'Andrey',
    idade: 30,
    profissao: 'criador de pipa'
};
const rafalea = {
    nome: 'Rafaela',
    idade: 24,
    profissao: 'Desenvolvedora'
};
var Profussao;
(function (Profussao) {
    Profussao[Profussao["Professora"] = 0] = "Professora";
    Profussao[Profussao["Atriz"] = 1] = "Atriz";
    Profussao[Profussao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profussao[Profussao["CriadorDePipa"] = 3] = "CriadorDePipa";
})(Profussao || (Profussao = {}));
const manuela = {
    nome: 'Manuela',
    idade: 24,
    profissao: Profussao.Desenvolvedora
};
const felipe = {
    nome: 'Felipe',
    idade: 30,
    profissao: Profussao.CriadorDePipa
};
const suely = {
    nome: 'Suely',
    idade: 63,
    profissao: Profussao.Atriz,
    materias: ['Matemática', 'Programação']
};
const fernanda = {
    nome: 'Fernanda',
    idade: 32,
    materias: ['Biologia', 'Química']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(fernanda.materias);
