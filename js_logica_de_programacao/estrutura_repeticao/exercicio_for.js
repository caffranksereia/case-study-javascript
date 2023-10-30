const elementos = [
    {tag:'p', texto:'Qualquer texto aqui'},
    {tag:'div', texto:'Frase 3'},
    {tag:'footer', texto:'Frase 2'},
    {tag:'section', texto:'Frase 4'}
];
let i =0;
const container = document.querySelector('.container');
const div = document.createElement('div');

for (i; i < elementos.length; i++)
{   
    let {tag: tags, texto} = elementos[i];
    let tagCriada = document.createElement(tags);
    let tex = document.createTextNode(texto);
    tagCriada.innerText = texto;
    tagCriada.appendChild(tex);
    div.appendChild(tagCriada);
    console.log(tags);
}

container.appendChild(div);