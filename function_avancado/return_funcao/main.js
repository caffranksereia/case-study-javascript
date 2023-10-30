//return
//retorna um valor
//temrina a funcao

function sumAb(a,b)
{
    return a +b
}
console.log(sumAb(1,2))

function falaFrase(comeco)
{
    function falaFraseResto(resto)
    {
        return comeco + ' ' + resto;
    }
    return falaFraseResto;
}
const fala = falaFrase('Ola');
const resto = fala('Mundo!');
console.log(resto);

console.log('<<<<------------------------');

function duplica(n) {
    return n*2;
}

function triplica(n) {
    return n*3;
}

function quadplica(n) {
    return n*4;
}

console.log(duplica(2));
console.log(triplica(4));
console.log(quadplica(2));

console.log('<-------------------------')
function multplica(multi)
{
    return function multiplicacao(n)
    {
        return n * multi
    }
}


const aa = multplica(2);
const bb = multplica(3);
const cc = multplica(4);
console.log(aa(3));
console.log(bb(2));
console.log(cc(10));
