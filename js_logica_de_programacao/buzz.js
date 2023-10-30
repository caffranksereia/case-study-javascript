function fizzBuzz(n)
{
    if(typeof n !== 'number') return n;
    if(n%5===0 && n%3===0)return 'fizzbuzz';
    if (n%3===0)return 'fizz';
    if (n%5 ===0)return 'buzz';
    return n;
    
}
for (let i =0; i<=100; i++ )
{
    console.log(verifica_se_dividido(i))
}   