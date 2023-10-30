function createCalc()
{
    return {
        //atributo 
        display: document.querySelector('.display'),

        init() {
            this.buttonClick();
            this.buttonEnter();
        },
        buttonEnter()
        {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13)
                {
                    this.iguals();
                }
            });
        },
        clearDisplay(){
            this.display.value = '';
        },
        deleteOne()
        {
            this.display.value = this.display.value.slice(0, -1);
        },
        iguals()
        {
            let conta = this.display.value;
            try {
                conta = eval(conta)
                if(!conta)
                {
                    alert("invalida conta");
                    return
                }
                this.display.value = String(conta);
            } catch (error) {
                alert("invalida conta");
                return;
            }
        },
        
        //metodo aqui
        buttonClick(){
            document.addEventListener('click',function(e)
            {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnPararDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if(el.classList.contains('btn-igual'))
                {
                    this.iguals();
                }
            }.bind(this));
        },
        btnPararDisplay(valor){
            this.display.value +=valor;
        }

    };
    
}

const calc = createCalc()
calc.init();
