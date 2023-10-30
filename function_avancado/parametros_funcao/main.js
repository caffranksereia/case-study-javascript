//Se envio as informacoes para funcao fica no arguments sem parametro
//argumentos que sustenta todos os arguymento enviados
function sayMyName(a,b,c,d,e,f,g,h,i,j,l,n)
{   
    let total = 0;
    for (let argumento of arguments)
    {
        total +=argumento
    }
    console.log(total,a,b,c,d,e,f,g,h,i,j,l,n);
}
sayMyName(1,2,3,4,5,6,7,8,9,10);

function sumAB(a,b=2,c=4)
{
    b=b || 0;
    console.log(a + b +c);
}
//enviar undefined nao e legal 
sumAB(1,undefined,34);

//atribuicao via destruturacao
function description({nome, sobrenome, idade})
{
    console.log(nome, sobrenome, idade);
}
//enviar undefined nao e legal 
let obj = {nome:'Fabio', sobrenome:'Eduardo', idade:29}
description(obj)
//obejtos array
function objArray([nome, sobrenome, idade])
{
    console.log(nome, sobrenome, idade);
}
//enviar undefined nao e legal 
let aa = [nome ='Fabio', sobrenome='Eduardo', idade=29]
objArray(aa)

const sumCount= (...args) =>{
    // for(let numeros of numero)
    // {
    //     if(operation ==='+') acumulador +=numeros;
    //     if(operation ==='-') acumulador -=numeros;
    //     if(operation ==='/') acumulador /=numeros;
    //     if(operation ==='*') acumulador *=numeros;


        
    //     console.log(acumulador)
    // }

    console.log(args);
};
//enviar undefined nao e legal 
sumCount('/',1,20,30,40,50)



