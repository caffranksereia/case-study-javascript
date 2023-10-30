const n1 = [1,2,3,4,5];
const n2 = [6,7,8,9,0];
//concat
const n3 = n1.concat(n2,[11,12,13,14], 'Fabio', 'Eduardo');
//spread ...
const n4 = [...n1, ...n2]
const n5 = [...n1, ...n2, 'arroz', 'Feijao', [15,16,17,18]]
console.log(n3);
console.log(n4);
console.log(n5);