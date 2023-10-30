//essa funcao pode usar variavel global
//funcao e sua bolha se nao tem uma variavel dentro da funcao 
// o mesmo busca fora da funcao, pai dela, pai do pai dela e  vai buscando ate chegar no escopo global
const name = 'Luiz';

function sayName()
{
    console.log(name);
}

console.log('<------- ')
function useSayName()
{
    const name = 'Eduardo';
    sayName()
}
useSayName();