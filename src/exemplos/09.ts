// 09 - Incluindo callback em funções

function somaValoresNumericosTratar(num1: number, num2: number, callback: (num: number) => number): number {
    let resultado = num1 + num2
    return callback(resultado);
}

function aoQuadrado(num: number): number {
    return num * num
}

function dividirPorEleMesmo(num: number): number {
    return num / num
}

console.log(somaValoresNumericosTratar(1, 3, aoQuadrado))
console.log(somaValoresNumericosTratar(1, 3, dividirPorEleMesmo))