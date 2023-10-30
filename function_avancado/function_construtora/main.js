//funcao construtora -> objetos
//funcao fabrica => objetos
// construtora -> sempre precisa iniciar com a letra  Maiuscula ex: Pessoa(new)

function Pessoa(name, nickname)
{   //atributos ou metodos privados
    const ID = 1234556;
    const metodoInterno = function() {};
    //Atributos ou metodos publicos
    this.name = name;
    this.nickname = nickname;
    this.metodo = function(){
        console.log(this.name + ': sou um metodo');
    }
}
const p = new Pessoa('Fabio ', 'Eduardo');
const p1 = new Pessoa('Luiz ', 'Otavio');
console.log(p.metodo());
console.log(p1.metodo());