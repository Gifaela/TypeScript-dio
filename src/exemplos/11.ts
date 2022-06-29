// 11 - Como funciona o tipo never e o comando throw

function jogaErro(erro: string, codigo: number): never { // never é um código que nunca é finalizado, sempre é interrompido - interrompe o fluxo do código
    throw {error: erro, code: codigo};
}

jogaErro('deuErro', 500)