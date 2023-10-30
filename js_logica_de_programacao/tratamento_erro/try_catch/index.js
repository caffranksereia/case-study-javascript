// try{
//     console.log(naoExisto)
// }catch(err){
//     console.log("Nao existe")
//     console.log(err)
// }

function soma(x,y)
{
    if(typeof x !== 'number' || typeof y !== 'number')
    {
        throw new Error('x or y its a number');
    }
    return x+ y;
}
try {
    console.log(soma(2,2));
console.log(soma('2',2));
}catch(e) 
{
    console.log("faz o L do amor");
}