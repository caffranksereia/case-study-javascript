console.log('<------- ');
//escopo global
//closure tem habilidade da funcao de acessar o seu escopo lexico 
//closure pode alterar de funcao para funcao
// fechar conforme escopo com o closure e muda o contexto lexico
function sayName(nome)
{
    return function(){
        console.log(nome);
    }
}
const funcao = sayName('Abobora');
const funcao2 = sayName('teste');
console.log(funcao());
console.log(funcao2());

