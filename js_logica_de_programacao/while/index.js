function aleatorio(min, max)
{
    const raio = Math.random()*(max - min)+min;
    return Math.floor(raio);
}
const min = 1;
const max = 50;
let rand = aleatorio(min,max);
while(rand !== 10)
{
    rand =aleatorio(min,max)
    console.log(`Segui a vida ${rand}`)
}