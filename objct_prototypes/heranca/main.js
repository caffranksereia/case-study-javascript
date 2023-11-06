//Produto
//Camisetam caneca, lapis

function Produto(nome,preco)
{
    this.nome= nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantidade)
{
    this.preco += quantidade;
}

Produto.prototype.diminuir = function(quantidade)
{
    this.preco -= quantidade;
}
function Camiseta(nome, preco, cor) 
{
    Produto.call(this, nome,preco)
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.construtor = Camiseta;
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco *percentual)/100
}

function Caneca(nome, preco, material, estoque){
   Produto.call(nome, preco);
   this.material = material;
   this.estoque = estoque;

   Object.defineProperty(this, 'estoque', {
    enumerable:true,
    configurable: false,
    get: function(){
        return estoque;
    },
    set:function(valor){
        if(typeof valor !== 'number')return;
        estoque = valor;
    }
   })

}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototupe.construtor = Caneca

const produtos = new Produto('Gem', 111)
const camisa = new Camiseta('regata', 7.5, 'Preta')
const caneca = new Caneca('One piece', 13,'Porcelana',5 )
console.log(camisa)
console.log(caneca)
console.log(produtos)
