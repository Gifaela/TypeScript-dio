// 10 - Any está de volta sobre unknown

let anyEstaDeVolta: any;
anyEstaDeVolta = true
anyEstaDeVolta = "dois"
anyEstaDeVolta = 2;

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta;

let unknowValor: unknown;
unknowValor = 2;
unknowValor = false;
unknowValor = 'dois';

let stringTest2: string = 'verifiacar';
// stringTest2 = unknowValor; // não aceita valor any, e para aceitar, é necessário fazer uma validação
if (typeof unknowValor === "string"){
    stringTest2 = unknowValor
}