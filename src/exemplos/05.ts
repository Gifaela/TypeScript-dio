// 05 - Sobre o tipo de variável any

let valorAny: any;
valorAny = 3,
    valorAny = "Amor",
    valorAny = true
console.log(typeof (valorAny)) // boolean

let valoString: string = 'Teste'
console.log(typeof (valoString)) // string

valoString = valorAny
console.log(typeof (valoString)) // boolean

let valoString2:string='testão';
valoString2 = valorAny

function somarString(string1: string, string2: string) {
    console.log(string1 + string2); // true + true = 2
}

somarString(valoString,valoString2)