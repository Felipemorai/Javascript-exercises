/* For-in */

const person = {
    name: 'Mathew',
    age: 25
};

for(let key in person) {
    console.log(key, person);
}

const colors = ['Red', 'Blue', 'Green'];

for (let indice in colors) {
    console.log(indice, colors[indice])
}