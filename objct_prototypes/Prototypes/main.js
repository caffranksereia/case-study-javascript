/*
    JS baseado em prototipos para passar propriedades e metodos de um objetos para outro.

    definicao de prototipo 
    Prototipo e o temro usado apra se refetir ao que foi craido pela
    primeira vez, servindo de modelo ou molde para futuras producoes.

    Todos os objetos tem uma referencia interna para um prototipo (__proto__)
    que vem da propriedade protype da funcao construtora que foi usada para cria-lo.
    Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este mesmo 
    no proprio objeto e depois a cadeia de prototipo e usada ate o topo (null) ate encontrar (ou nao) tal mesmbro.
    
*/

function Pessoas(nome, sobrenome)
{
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.completoNome = () => this.nome + " " +this.sobrenome;
}
const p1 = new Pessoas('Fabio' , 'Eduardo'); //<- Pessoa = funcao construtora
const p2 = new Pessoas('Jose' , 'Camacho'); // <- Date = Funcao data
const data = new Date() // <- Date = Funcao constrotura
console.log(p1)
console.log(p2)
console.log(data)