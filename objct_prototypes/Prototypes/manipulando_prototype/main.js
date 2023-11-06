// new Object -> Object.prototype
const objA =
{
    chave: 'A'
    // __proto__: Object.prototype
};

// new Object -> Object.prototype
const objB =
{
    chave: 'B'
    // __proto__: Object.prototype
};

const objC =
{
    chave: 'C'
    // __proto__: Object.prototype
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chave)


function Produto(nome, preco)
{
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual)
{
    this.preco = this.preco -(this.preco * (percentual/100));
};

Produto.prototype.aumento = function(percentual)
{
    this.preco = this.preco +(this.preco * (percentual/100));
};


const p = new Produto('feijoa', 15)
const p1 = {nome:'Caneca', preco:11}
const p2 = Object.create(Produto.prototype,
    {
        tamanho:{
            writable:true,
            configurable:true,
            enumerable: true,
            value:43
        },
        tamanho1:{
            writable:true,
            configurable:true,
            enumerable: true,
            value:43
        }
    })
Object.setPrototypeOf(p1, Produto.prototype);
p2.preco = 113
p2.aumento(10)
console.log(p1)

console.log(p2)
