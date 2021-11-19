/* Math.random */

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const randomNumber = getRandom;
console.log(randomNumber(10,100));