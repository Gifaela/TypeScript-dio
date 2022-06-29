// 04 - Lidando com objetos, enum e interface
// (estrutura TS, comentado para não dar erro, e com .js para o watch gera um JS)

const giulia = {
    nome: 'Giulia',
    idade: 23,
    profissao: 'desenvolvedora'
}

const andrey: { nome: string, idade: number, profissao: string } = {
    nome: 'Andrey',
    idade: 30,
    profissao: 'criador de pipa'
}

const rafalea: { nome: string, idade: number, profissao: string } = {
    nome: 'Rafaela',
    idade: 24,
    profissao: 'Desenvolvedora'
}

enum Profussao { // grupo de constantes
    Professora,
    Atriz,
    Desenvolvedora,
    CriadorDePipa
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profussao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const manuela: Pessoa = {
    nome: 'Manuela',
    idade: 24,
    profissao: Profussao.Desenvolvedora
}

const felipe: Pessoa = {
    nome: 'Felipe',
    idade: 30,
    profissao: Profussao.CriadorDePipa
}

const suely: Estudante = {
    nome: 'Suely',
    idade: 63,
    profissao: Profussao.Atriz,
    materias: ['Matemática', 'Programação']
}

const fernanda: Estudante = {
    nome: 'Fernanda',
    idade: 32,
    materias: ['Biologia', 'Química']
}

function listar(lista: string[]) {
    for(const item of lista){
        console.log('- ', item)
    }
}
listar(fernanda.materias)