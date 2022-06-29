"use strict";
let buttonTest = document.getElementById('button');
buttonTest === null || buttonTest === void 0 ? void 0 : buttonTest.addEventListener('click', () => {
    console.log('Funcionou');
});
function somarImplicito(parametro1, parametro2) {
    return parametro1 + parametro2;
}
