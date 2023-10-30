const nomes = ['ze da manga', 'Eduardo', 'Circuncisao', 'ze da manga', 'Rafael'];
nomes.splice(4, 1)
console.log(nomes);

//retorna o que foi removidos
const aa = ['ze da manga', 'Eduardo', 'Circuncisao', 'ze da manga', 'Rafael'];
const as =aa.splice(3, 1)
console.log(aa);
console.log(aa,as);

//numero maximo
const bb = ['a', 'b', 'c', 'd', 'e'];
const bs =bb.splice(3, Number.MAX_VALUE);
console.log(bb);
console.log(bb,bs);

//POsso remover e add 
const cc = ['a', 'b', 'c', 'd', 'e'];
const cs =cc.splice(3, 1, 'g');
console.log(cc);
console.log(cc,cs);

//shift remove o primeiro elemento
const shfRemove = nomes.splice(0,1)
console.log(nomes, shfRemove);

//unshift remove o ultimo elemento
const unShfRemove = nomes.splice(0,1)
console.log(nomes, unShfRemove);

//push
const puShfpush = nomes.splice(nomes.length,1, 'Luiz');
console.log(nomes, puShfpush);

//push no comeco unshift
const pushStarr = nomes.splice(0,0, 'Luiz','Bosh', 'Iris');
console.log(nomes, pushStarr);