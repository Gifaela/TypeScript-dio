// 02 - Recriando a mesma aplicação simples com TS
// (comentado para não dar interferencia com o 03.ts)

export {} 

let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function somaNumeros(num1: number, num2: number) {
    return num1 + num2
}

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somaNumeros(Number(input1.value), Number(input2.value)));
        }
    })
}

