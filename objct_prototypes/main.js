//Revisao de objetos
//objeto
const pessoa = {
    //corpo do objeto o qeu estao aqui soa chaves;
    nome: "luiz",
    sobrenome: "Otavio"
}

const chaveName = 'nome'
const chaveSobrenome = 'sobrenome'
//primiera forma 
console.log(pessoa.nome)
console.log(pessoa.sobrenome)

//segunda forma
console.log(pessoa[chaveName])
console.log(pessoa[chaveSobrenome])

//new Array(); [] <- tanto faz
//construtor
const p1 = new Object();
p1.nome = 'Fabio';
p1.sobrenome = 'otavio'
p1.idade = 29
console.log(p1.nome)
console.log(p1.sobrenome)

//se quiser apgar o objeto

console.log(p1)

//tambem podemos declarar uma funcao
p1.sayMyName = function(){
    console.log(`${this.nome} esta falando seu nome`);
}
p1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
p1.sayMyName();

console.log(p1.getDataNascimento());

//se quiser ver as chaves no for in
for (let pessoas in p1)
{
    console.log(p1[pessoas])
}

//Factory functions / conturtor functions/ Classes
 function Pessoas(name, nickname) {
 this.name = name;
 this.nickname = nickname;
 }
 const p2 =  new Pessoas('Fabio Eduardo', 'Circuncisao');
 console.log(p2);

//se uisar o object.freez nao posso altera nada