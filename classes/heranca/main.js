class Controle {
    construtor(nome)
    {
        this.nome = nome;
        this.ligar = false;
    }
    

    ligar(){
        if(this.ligar) {
            console.log(this.nome +' Ligado')
            return;
        }
        this.ligar = true;
    }
    desligar()
    {
        if(!this.ligar) {
            console.log(this.nome +' desligado')
            return;
        }
        this.ligar = false;
    }
}

class Tv extends Controle{
    constructor(nome, cor, model)
    {
        super(nome)
        this.cor = cor;
        this.model = model;
        
    }
}

class Ipad extends Controle{
    constructor(nome, temWifi)
    {
        super(nome)
        this.temWifi = temWifi;
        
    }
    ligar(){
        console.log('Alterou o metodo ligar')
    }
}

const s = new Tv('SmartTv Samsung', 'Preto', 'Smartv 4k ')
const i = new Ipad('Ipad', true)
console.log(s)
i.ligar()
console.log(i.ligar)