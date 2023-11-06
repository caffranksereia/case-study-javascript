class ControlRemote{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    ligar() {
        console.log('Ligado');
        return true;    
    }
// instancia
    desligar() {
        console.log('desligar');
        return ;
    }
    volumeAumentar(){
        this.volume+=2
    }
    volumeDiminuir(){
        this.volume-=2
    }
    //metodo static
    static trocaPilha(){
        console.log('ok vou trocar')
    }
}

const t = new ControlRemote('LG');
t.ligar();
t.volumeAumentar();
t.volumeAumentar();
t.volumeAumentar();
t.volumeAumentar();
t.volumeAumentar();
ControlRemote.trocaPilha();
console.log(t);