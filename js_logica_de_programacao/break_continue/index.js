const num = [1,2,3,4,5,6,7,8];
let i =0;
while (i < num.length)
{
    let number = num[i];
    if (number ===2 )
    {
        console.log("pulei o 2")
        i++;
        continue;
    }
    console.log(number)

    if(number === 7)
    {
        console.log("7 encontrado, saindo ....");
        i++;
        break;
    }
    i++;
}