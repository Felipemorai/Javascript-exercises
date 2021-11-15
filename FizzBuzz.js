/* Divisible by 3 => Fizz */
/* Divisible by 5 => Buzz */
/* Divisible by 3 and 5 => FizzBuzz */
/* Not divisible by 3 and 5 => Repeat the entry number */
/* Not a number => Not a number */

const result = fizzBuzz(15);
console.log(result);

function fizzBuzz(entry) {
    if ( typeof entry !== 'number')
        return 'Not a number';
    if ((entry % 3 ===0) && (entry % 5 === 0))
        return 'FizzBuzz';
    if (entry % 3 === 0)
        return 'Fizz';
    if (entry % 5 === 0)
        return 'Buzz';
    
    return entry;
}