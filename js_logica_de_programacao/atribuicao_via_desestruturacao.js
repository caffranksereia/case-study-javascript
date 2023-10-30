//let a = 'A';//B
//let b = 'B';//C
//let c = 'C';//A
//const num = [b,c,a];
//[a,b,c] = num;

//console.log(a,b,c)

//           0  1  2  3  4  5  6  7  8 -> indexes
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9,];// todas serao const se caso fazer com let todas serao let
//... rest pega restante
const primeiroNumero = num[0];
const [primeiroNum, segundoNum, ...resto] = num;
const [um, dois, ...rest] = num;

console.log(primeiroNumero, primeiroNum, segundoNum);

console.log(...resto);


console.log(um,dois);
console.log(...rest);
//                  0       1       2 
//                0 1 2   3 4 5   6 7 8
const numeros = [[1,2,3],[4,5,6],[7,8,9]]
const [,[,,indexSeis]] = numeros;
const [list1, list2, lista3] = numeros;
console.log(numeros[1][2]);
console.log(indexSeis);
console.log(lista3[2]);