//IIFE -> Immediately invoked function expression
//esta protegida para ser executada imediatamente
(function(idade,altura, peso){
    const sobrenome = 'Eduardo'
    function falaOi(name){
        return name + ' ' + sobrenome
    }
    function falaName()
    {
        console.log(falaOi('Fabio'))
    }
    falaName();
    console.log(idade,altura, peso)
})(30,90,1.60);
//variavel criada dentro nao afeta se a mesmma variavel estiver fora
const name = 'Abbbbb'

