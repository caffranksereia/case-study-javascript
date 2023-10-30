//defineProperty - defineProperties
//defina uma     - defina varias
function Produto(name, price, estoque)
{
    this.name = name;
    this.price = price;
    this.estoque = estoque;;

    // Object.defineProperty(this, 'estoque',
    // {
    //     enumerable:true,//mostra a chave
    //     value:estoque,//valor pode ser  uma funcao
    //     writable:false,//pode alterar
    //     configurable:false//configurarvel
    // })

    Object.defineProperties(this,
    {   name: {
            enumerable:true,//mostra a chave
            value:estoque,//valor pode ser  uma funcao
            writable:false,//pode alterar
            configurable:false//configurarvel
        },
        price :{
            enumerable:true,//mostra a chave
            value:estoque,//valor pode ser  uma funcao
            writable:false,//pode alterar
            configurable:false//configurarvel
        },
        estoque :{
            enumerable:true,//mostra a chave
            value:estoque,//valor pode ser  uma funcao
            writable:false,//pode alterar
            configurable:false//configurarvel
        }
        
    })
}

const p1 = new Produto('Camiseta', 20,3)
console.log(Object.keys(p1))
console.log(p1.name)
for (let chave in p1)
{console.log(chave)}