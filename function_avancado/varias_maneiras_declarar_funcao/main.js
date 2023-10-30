//Declaracao de funcao (function hoisting) declaracao de function normal 
SayHi(); //<- ou aqui posso declarar aqui   

function SayHi()
{
    console.log("Hi")
}

//SayHi(); <- posso declarar aqui  
//first-class objects (objetos de primeira classe)    
//function expression variavel pode receber uma function anonima
const nome = function () {
    console.log("Say my Name");
}
nome();

//posso criar uma funcao que executa uma funcao
function executeFunction(funcao)
{   console.log('executa funcao baixo executando')
    funcao();
}
executeFunction(nome);

//posso criar uma arrow function
const funcaoArrow = () =>{
    console.log('Sou uma arrow function')
}
funcaoArrow();

//dentro de um objecto posso ter um function
const obj = {
    SayHi: function() {
        console.log('Estou falando....')
    }
}
obj.SayHi();