//revisao
//                 0        1           2            3
const names = ['Fabio', 'Eduardo', 'Circuncisao', 'Rafael'];
//String, obj, funcao, numeros
//Valor por referencia
const testeArray = names;
testeArray.pop();
names[2] = 'Joao';
delete names[2];

console.log(names);

//podemos usar o sprad 

const spadNames = [...names];
//verificar o quantidade
console.log(names.length)

//podemos remover
const teste = ['Fabio', 'Eduardo', 'Circuncisao', 'Rafael'];
const removeName = teste.pop();
const shft = teste.shift();//adiciona no comeco
teste.push('ze da manga');
teste.unshift('ze da manga');//adiciona no final 
console.log(teste);

//podemos fatiar array
const a = ['Fabio', 'Eduardo', 'Circuncisao', 'Rafael'];
const fatiarArrya = a.slice(1,3);
console.log(a);

//converter uma string em um array
const convertArrya = 'Fabio Eduardo Circuncisao';
const nomes = convertArrya.split(' ');
console.log(nomes)


// juntar todos
const juntNames = ['Fabio', 'Eduardo', 'Circuncisao', 'Rafael'];
const juntName = juntNames.join(' ');
console.log(juntName)