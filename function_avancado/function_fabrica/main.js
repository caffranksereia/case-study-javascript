//Factory function
//Constructor function 
function peopleCreate(name, nickname,a,p)
{
    return {
        name,
        nickname,
        get completName() {
            return `${this.name} ${this.nickname}`
        },
        set completName(value){
            value = value.split(' ');
            this.name = value.shift();
            this.nickname = value.join('')
            console.log(value)
        },
        voice(answer) {
            return `${name} esta ${answer}.`;
        },
        altura:a,
        peso:p,
        //GETTER por causa do get virou um atributo e deixou de ser uma funcao
        get imc() {
            const indece = this.peso / (this.altura **2);
            return indece.toFixed(2);
        }
    };
}
const p1 = peopleCreate('Fabio', 'Eduardo',1.8, 90);
console.log(p1.voice('teste'));
p1.completName = "abobora teste"
console.log(p1.name);
console.log(p1.voice('testedas'));
