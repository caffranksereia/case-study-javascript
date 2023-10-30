//map -> retorna altera o valor do array original

//Dobre os numeros
const n = [5,50,80,1,2,3,4,5,6,7,11,15,22,27];
//se caso for usar fora do filter se nao cria um funcao anonima
// function callbckFitler(value)
// { 
//     return value > 10;
// }
const dobra = n.map(function(value) { 
    return value * 2;
});
console.log(filternumber)
//Para cada elemento:
//retorna as pessoas apenas uam string do nome da pessoa
// remova apenas a chave "nome" do objeto
// adicione uma chave id em cada objeto
const pessoas =[
    { nome:'Fabio Eduardo', idade:27 },
    { nome:'Ana', idade:25 },
    { nome:'Maria', idade:20 },
    { nome:'Bento', idade:17 },
    { nome:'Rodolfo', idade:60 },
    { nome:'Abner', idade:90 },
];

const pessoasFilter = pessoas.map(value => value.nome);
    
const pessoasIdade = pessoas.map(value=>({idade: value.idade}));

const iDs = pessoas.map(function(value, indice) 
{
    const newValue = {...value};
    newValue.id = indice
    return newValue;
})
