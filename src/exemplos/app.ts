let buttonTest = document.getElementById('button');

buttonTest?.addEventListener('click', () => {
    console.log('Funcionou')
});

function somarImplicito(parametro1: any, parametro2: any) {
  return parametro1 + parametro2;  
}