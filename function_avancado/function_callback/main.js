const min = 1000;
const max =3000
function rand(min, max)
{
    const randoNum = Math.random()* (max - min ) + min;
    return Math.floor(randoNum);
}
function form1(callback){
    setTimeout(function()
    {
        console.log('form1');
        if(callback) callback();
    }, rand());
    
}

function form2(callback){
    setTimeout(function()
    {
        console.log('form2');
        if(callback) callback();
    }, rand());
    
}

function form3(callback){
    setTimeout(function()
    {
        console.log('form3');
        if(callback) callback();
    }, rand());
    
}
function form1Call(){
    form2(form2Call);

}
function form2Call() {
    form3(form3Callback)
}
function form3Callback () {
    console.log('Ola mundo');
};
form1(form1Call);
