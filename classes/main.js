// const falar(){
//     falar(){
//         console.log("")
//     }
// }

// const beber(){
//     falar(){
//         console.log("")
//     }
// }

// const comer(){
//     falar(){
//         console.log("")
//     }
// }

class People {
    constructor(name, nickname){
        this.name = name,
        this.nickname = nickname
    }

    falar(){
        console.log(`${this.name} esta falando`)
    }
    comer(){
        console.log(`${this.name} esta comendo`)
    }

    beber(){
        console.log(`${this.name} esta bebendo`)
    }
}




const p = new People("Fabio", "Eduardo")
console.log(p)