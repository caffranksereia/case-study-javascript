function Calculadora(numb_1, numb_2) {
    this.display = document.querySelector('.display'),
    this.capturaClick =() =>{
        const el = event.target;
        if(el.classList.contains('bnt-num'))
    }
    this.init = () =>
    {
        this.capturaClick();
    }

    //methods publico
    this.numb_1 = numb_1;
    this.numb_2 = numb_2;
    this.calc_math =function(){
        return numb_1+=numb_2
    },
    this.calcsub= function(){
        return numb_1-=numb_2
    },
   this.calc_div = function(){
        return numb_1/=numb_2
    },
   this.calc_mult = function(){
        return numb_1*=numb_2
    }

}
const contSum = new Calculadora(1,2);
console.log(contSum.calc_math());