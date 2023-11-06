class ValidaCpf{
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo', 
        {
            writable:false,
            enumerable:false,
            configurable:false,
            value: cpf.replace(/\D+/g,'')
        });
    };
    isSquencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    geraNewCpf(){
        const cpfPartial = this.cpfLimpo.slice(0, -2);
        const dig = ValidaCpf.createDigi(cpfPartial);
        const dig2 = ValidaCpf.createDigi(cpfPartial + dig)
        this.newCpf = cpfPartial+ dig+dig2;
    }

    static createDigi(cpfSemDigits){
        let total = 0;
        let reverso = cpfSemDigits.length +1;

        for(let stringNumerica of cpfSemDigits)
        {
            total += reverso*Number(stringNumerica);
            reverso--;
        }
    
        const digito = 11 - (total  % 11);
        return digito <= 9?String(digito): '0';  
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSquencia()) return false;
        this.geraNewCpf();

        return this.newCpf === this.cpfLimpo
        
    };
    
}

let validarcpf = new ValidaCpf('415.527.898-70')
if(validarcpf.valida()){
    console.log('CPF Valido')
}else{console.log("CPF invalido")}