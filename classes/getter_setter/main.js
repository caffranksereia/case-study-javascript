const _velocidade = Symbol('velocidade')
class Carro {
    constructor(name){
        this.name = name,
        this[_velocidade] = 0;
    }

    set velocidade(valor)
    {
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor <= 100 || valor<= 0) return;
        this[_velocidade] = valor;

    }

    get velocidade()
    {
        console.log('GETTER');
        return this[_velocidade];
    }
    acelerar(){
        if(this[_velocidade] >=100) return;
        this[_velocidade]++;

    }
    freiar(){
        if(this[_velocidade] <=0) return;
        this[_velocidade]--;
    }
}




const c = new Carro("mercedes");
// let i = 0;
// for (i; i<=100;i++)
// {
//     c.acelerar();
// }
c.velocidade = 99;
console.log(c.velocidade)


class People{
    constructor(name, nickname)
    {
        this.name = name;
        this.nickname = nickname;
    }

    get completName(){
        return this.name + '' + this.nickname;
    }

    set completName(valor)
    {
        valor = valor.split(' ')
        this.name = valor.shift();
        this.nickname = valor.join(' ');
    }
}

const p = new People('Luiz', 'miranda');
p.completName = 'Fabio Eduardo Circuncisao';
console.log(p.name);
console.log(p.nickname);
