/* Write a function that takes 2 numbers and returns the largest of them */

let higherValue = max(10,5);
console.log(higherValue);

function max(number1, number2) {
    if(number1 > number2)
        return number1;
    else return number2;
}

/* Ternary  return number1 > number2 ? number1: number2;*/