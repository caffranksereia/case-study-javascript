function* geradora1(){
    //codigo qualquer coisa
    yield 'Valor 1';
    //codigo qualquer coisa
    yield 'Valor 2';
    //codigo qualquer coisa
    yield 'Valor 31';
}

function* geradora2(){
    let i = 0;

    while(true) {
        yield i;
        i++
    }
}
function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

function* geradora5(){
    yield function() {
        console.log('vim do y1')
    }

    return function(){
        console.log("vim do return")
    }

    yield function() {
        console.log('vim do y2')
    }
}

const g1 = geradora1();
const g2 = geradora2();
const g3 = geradora3();
const g4 = geradora4();
const g5 = geradora5();
const aaa = g5.next().value;
console.log(aaa());