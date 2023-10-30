//some todos os numero(reduce)
//mais utilizado para somar tudo 
//o acumulador se torna valor se caso comparar com algo
const n = [5,50,80,1,2,3,4,5,6,7,8,11,15,22,27];
const total = n.reduce(
    function(
        acumulador,
        value,
        indice,
        array
    ){
        acumulador += value
        return acumulador;
    },[]);
console.log(total)

//retorne um array com os pares(filter)
//nao fazer
const pares = n.reduce(
    function(
        acumulador,
        value)
    {
        if(value % 2 === 0){
            acumulador+=value;
            
        }
        return acumulador;
        
    },0
);
console.log(pares)

//retorne um array com dobro dos valores(Map)
const dobra = n.reduce(
    function(
        acumulador,
        value,
        indice,
        array)
    {
        acumulador.push(value * 2);
        return acumulador;
    },[]
);
console.log(dobra);

//retorna a pessoa mais velha
const pessoas =[
    { nome:'Fabio Eduardo', idade:27 }, 
    { nome:'Ana', idade:25 },
    { nome:'Maria', idade:20 },
    { nome:'Bento', idade:17 },
    { nome:'Rodolfo', idade:60 },
    { nome:'Abner', idade:90 },
];

const maisVelha = pessoas.reduce
(
    function(acumulador, value)
    {
        if(
            acumulador.idade > value.idade
            )return acumulador;
        return value;
    }
)
console.log(maisVelha)