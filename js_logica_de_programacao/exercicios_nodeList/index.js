const paragrafos = document.querySelector('.paragrafos');
const p = document.querySelectorAll('p');
const stylebody = getComputedStyle(document.body);
const backColors = stylebody.backgroundColor;
console.log(backColors);
for (let ps of p )
{
    ps.style.backgroundColor = backColors;
    ps.style.color = '#FFFFFF'
    console.log(ps);
}