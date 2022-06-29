"use strict";
// 11 - Como funciona o tipo never e o comando throw
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deuErro', 500);
