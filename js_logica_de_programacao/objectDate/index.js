const data = new Date(); //funcao construtora.
console.log(data.getDate());//metodo retorna  o dia
console.log(data.getDay());//metodo retorna o dia da semana, domingo e 0;
console.log(data.getFullYear());//metodo retorna o ano;
console.log(data.toString());//metodo retona todas as informacoes

function leftzero(num )
{
    return num >= 10 ? num: `0${num}`;
}
function formartDate(date)
{
    const sum1 = 1;
    const month = leftzero(data.getMonth() + sum1);
    const day = leftzero(data.getDate());
    const hours = leftzero(data.getHours());
    const year = leftzero(data.getFullYear());
    const min = leftzero(data.getMinutes() + sum1);
    const sec = leftzero(data.getSeconds() + sum1);


    return `${date},${day}/${month}/${year}  horario de brasilia -> ${hours}:${min}: ${sec}`;
} 
const dateBrasil = formartDate(data);
console.log("this is month in Brazil ->",dateBrasil);
console.log("1"+2+3);