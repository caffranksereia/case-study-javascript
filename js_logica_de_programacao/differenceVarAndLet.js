//let tem escopo de bloco {...bloco}

//var so tem escopo de funcao

//Quando a enginner do javascript ele busca no bloco da funcao menor primeiro a variavel let assim que encontra
//procura no bloco maior se nao encontra procura no scopo global e caso nao encontra da erro.

// const verdadeira = true;

// let nome = 'Luiz';//criando
// var nome2 = 'Luiz';

// if(verdadeira)
// {
//     let nome = "otavio";//criando
//     console.log(nome, nome2);

//     if(verdadeira)
//     {   var nome2 = 'Otavio' //redeclarando
//         console.log("OK");
//     }
// }

const verdadeira = true;
// var sobrenome = "Circuncisao" // variavel global
// function sayHi(){//funcao pode chamar 
//     console.log(sobrenome)
// }

// function otherHi()
// {
//     var sobrenome = "Circuncisao" // variavel so pertence a essa funcao caso eu chamar ela fora desse escopo
//     console.log(sobrenome)// ocorre erro
//     //mas se eu declara o var dentro de uma outra funcao ou condicao eu posso usar fora dessa mesma,
//     //dentro da funcao ou condicao ela so existe la dentro.
// }

console.log(sobrenome);
//cria variavel depois do console.log da erro qeu ano existe a variavel, mas caso crie e define a variavel 
//engenner eleva a variavel (cria) e a redefina para undefined so corrige se caso eu definir antes do console.log
//hosting
//nao acontece a mesma coisa com let pois nao ocorre o hjosting quando tento utilizar antes
var sobrenome = "Circuncsiao"

