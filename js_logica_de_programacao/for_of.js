const nome = {
    nome: 'Fabio',
    sobrenome: 'Eduardo'
}
console.log('-------------for classico -geralmente com iteraveis (arrya ou strings)-------->');
for (let i =0; i< nome.length; i++)
{
    console.log(nome[i]);
}
console.log('-------------for in retorna o valor index ou chave(string, array objeto)--------->');
for (let i in nome)
{
    console.log(i,nome[i])
}
console.log('-------------for of retorna valor em si iteravel, array ou strings-------->');
for (let valor of nome)
{
    console.log(valor);
}
console.log('-------------for each--------->');
nome.forEach(function(el) {
    console.log(el);
});