//css
 const h1 = document.querySelector('.container h1');
//
const data = new Date();

//1 primeira maneira
// function getDay(data)
// {   let getDia
//     switch(data)
//     {
//         case 0:
//             getDia = "Domingo";
//             return getDia;
//         case 1:
           
//             getDia = "Segunda";
//             return getDia;
//         case 2:
//             getDia = "Terca";
//             return getDia;
//         case 3:
//              getDia = "Quarta";
//              return getDia;
//         case 4:
//              getDia = "Quinta";
//              return getDia;
//         case 5:
//              getDia = "Sexta";
//              return getDia;
//         case 6: 
//              getDia = "Sabado";
//              return getDia;
//         default:
//              getDia = "";
//              return getDia;
//     }
// }

// function getMesdoAno(data)
// {   let getMes
//     switch(data)
//     {
//         case 0:
//             getMes = "Janeiro";
//             return getMes;
//         case 1:
           
//         getMes = "Fevereiro";
//             return getMes;
//         case 2:
//             getMes = "Marco";
//             return getMes;
//         case 3:
//             getMes = "Abril";
//              return getMes;
//         case 4:
//             getMes = "Maio";
//              return getMes;
//         case 5:
//             getMes = "Junho";
//              return getMes;
//         case 6: 
//             getMes = "Julho";
//              return getMes;
//         case 7: 
//             getMes = "Agosto";
//              return getMes;
//         case 8: 
//             getMes = "Setembro";
//              return getMes;
//         case 9: 
//             getMes = "Sabado";
//              return getMes;
//         case 10: 
//             getMes = "Outubro";
//              return getMes;
//         case 11: 
//             getMes = "Novembro";
//              return getMes;
//         case 12: 
//             getMes = "Dezembro";
//             return getMes;
//         default:
//             getMes = "";
//              return getMes;
//     }
// }
// function zeroEsquerda(num)
// {
//     return num >=10 ? num: `0${num}`;
// }

// function createDataa(data)
// {
//     const sum1 = 1;
//     const diaSemana = getDay(data.getDay());
//     const dDia = data.getDay();
//     const dYear = data.getFullYear();
//     const dMes =getMesdoAno(data.getMonth()+sum1);
//     const dHoras = zeroEsquerda(data.getHours());
//     const dMinut = zeroEsquerda(data.getMinutes());

//     return(
//         `${diaSemana}-feira,${dDia} de ${dMes} de ${dYear}, ${dHoras}:${dMinut}`
//     )
// }
// h1.innerHTML = createDataa(data)
// console.log(createDataa(data));

//2- maneira
// const option = {
//     dateStyle: 'full',
//     timeStyles: 'short'
// };
// h1.innerHTML = data.toLocaleDateString('pt-br', option);

h1.innerHTML = data.toLocaleDateString('pt-br', {dateStyle: 'full',timeStyles: 'short'});
