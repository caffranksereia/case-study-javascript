const n = [5,50,80,1,2,3,4,5,6,7,11,15,22,27];
let total =0
n.forEach(
    (value, indice, array) =>
        console.log(value,indice,array[indice])
        )

n.forEach(
    (value) =>
    total+=value
        )
console.log(total)