
    const falar = {
        falar() {
            console.log(`${this.name} esta falando`)
        },
    };

    const comer = {
        comer(){
            console.log(`${this.name} esta comendo`)
        }
    };

    const beber = 
        {
            beber(){
            console.log(`${this.name} esta bebendo`)
        }
    }


const proto_people = Object.assign({},falar,beber,comer)

   

function  createPessoa(name, nickName){
    return Object.create(proto_people, {
        name: {value: name},
        nickName:{value: nickName}
    })
}


const p = createPessoa('Fabio ', 'Eduardo')
const p2 = createPessoa('Maria ', 'A.')
console.log(p)
console.log(p2)
