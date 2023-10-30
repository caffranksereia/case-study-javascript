const frutas = ['banana','lIMAO','MANGA'];
let i =0;
let chave;
//for in -> le os indeces ou chaves do objeto
// for (i in frutas){
//     console.log(frutas[i]);
// }

// for (i;i<frutas.length; i++){
//     console.log(frutas[i]);
// }
const pessoas = {
    nome:'Luiz',
    sobrenome:'Otavio',
    idade:40
}

for (chave in pessoas)
{
    console.log(`${chave}: ${pessoas[chave]}`)
}