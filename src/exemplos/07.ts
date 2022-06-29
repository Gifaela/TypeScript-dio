// 07 - Definindo o tipo de retorno de uma função.

function somarValoresNumericos(num1: number, num2: number): number {
    return num1 + num2
  //   return num1 + num2.toString(); // erro por conta do ():number
}
console.log(somarValoresNumericos(4,6)) // 46