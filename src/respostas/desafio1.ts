// Resposta 1
const funcionario1 = {
    name: "John",
    code: 10
}

// Resposta 2
const funcionario3: { name: string, code: number } = {
    name: "John",
    code: 10
}

// Respostas 3 e 4
interface Funcionario {
    name: string,
    code: number
}

const funcionarioObj: Funcionario = {
    name: "John",
    code: 10
}

const funcionarioObj2 = {} as Funcionario;
funcionarioObj2.name = "John",
funcionarioObj2.code = 10




