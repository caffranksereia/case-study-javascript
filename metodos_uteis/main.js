const produto = {name:'caneca', preco: 1.90};
const mais1produto = {name:produto.name}
produto.name = 'camiseta';

console.log(produto);
console.log(mais1produto);

console.log(Object.getOwnPropertyDescriptor(produto,'name'))