const people = [
    {
        id: 3, name:'barbosa'
    },
    {
        id: 2, name:'Feitosa'
    },
    {
        id: 1, name:'Cida'
    },
];

// const newPeople = {};
// for (const peoples of people)
// {
//     const {id} = peoples;
//     newPeople[id] = {...peoples};
// }

const newPeople = new Map();
for (const peoples of people)
{
    const {id} = peoples;
    newPeople.set(id,{...peoples});
}

console.log(newPeople.get(2))

for(const again of newPeople.keys())
{
    console.log(again);
}

newPeople.delete(2);
console.log(newPeople);