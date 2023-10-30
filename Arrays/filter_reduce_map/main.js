//retorna a soma do sobro de todos os pares

//filter pares
//dobra os valores
// reduzir (somar tudo )
const n = [5,50,80,1,2,3,4,5,6,7,8,11,15,22,27];
const pares = n.filter(
    value => value % 2===0
).map(value => value * 2).reduce((
    ac, value
    )=> ac =+ value);
console.log(pares);