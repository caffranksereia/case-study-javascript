function ValidaCpf(cpfEnvia)
{
   Object.defineProperty(this, 'cpfLimpo',{
        enumerable:true,
        get: function(){
            return cpfEnvia.replace(/\D+/g,'')
        }
   });
}
ValidaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if (this.isSquencia())  return false

    const cpfPartial = this.cpfLimpo.slice(0, -2);
    const dig = this.createDigi(cpfPartial);
    const dig2 = this.createDigi(cpfPartial + dig)
    const newCpf = cpfPartial+ dig+dig2
    return newCpf === this.cpfLimpo;
};

ValidaCpf.prototype.createDigi = function(cpfParcial) 
{
    const cpfArray = Array.from(cpfParcial);
    let regress = cpfArray.length +1;
    const total = cpfArray.reduce((ac, val)  =>{
        ac +=(regress * Number(val))
        regress--;
        return ac;
    },0);
    
    const digito = 11 - (total  % 11);
    
    return digito > 9?'0' :String(digito);
}

ValidaCpf.prototype.isSquencia= function() {
    const sequency = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequency === this.cpfLimpo;
}
const CPF = new ValidaCpf('111.111.111-11');
if(CPF.valida()){
    console.log('CPF valida')
}else {
    console.log('CPF invalida')
}