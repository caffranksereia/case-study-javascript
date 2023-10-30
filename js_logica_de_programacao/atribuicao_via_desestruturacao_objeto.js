const pessoas = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade:30,
    endereco: {
        rua: 'Av Brasil',
        numero:320
    }
}
//atribuicao via desestruturacao

// const {nome , sobrenome, idade} = pessoas;

// const endereco = pessoas.endereco.rua;
// console.log(pessoas)
// console.log(nome)
// console.log(endereco)

const { idade, ...rest} = pessoas;
const {endereco: {rua: r, numero: a}}=pessoas;
console.log(idade,rest);
console.log(r, a);
console.log(pessoas)