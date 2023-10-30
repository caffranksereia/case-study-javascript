//defineProperty - defineProperties
//defina uma     - defina varias
function Produto(name, price, estoque)
{
    this.name = name;
    this.price = price;
    let estoquePrivacy = estoque;

    Object.defineProperty(this, 'estoque',
    {
        enumerable:true,//mostra a chave
        configurable:true,//configurarvel,
        get:function(){
            return estoquePrivacy;
        },
        set:function(value) {
            if(typeof value !== 'number'){
            console.log('Bad value');
            return
        }
        estoquePrivacy =value;
        }
    })

}
function Produto(){
    return {
        get name() {
            return this.name;
        },
        set name(value) 
        {
            name = value
        }
    }
}
const p1 = new Produto('Camiseta', 20,3)
console.log(p1)
p1.estoque ='111000';
console.log(p1.estoque)

const p2 = Produto('Camiseta')
p2.name = 'Coisinhas'
console.log(p2.name)