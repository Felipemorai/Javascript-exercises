/* Create function to display prime numbers */

/* Prime */
/* Composite */

/* Ex: 10, 11 */
displayPrimeNumbers(15)

function displayPrimeNumbers(limit) {
    for(let number = 2; number <= limit; number++) {
        if (isaPrime(number)) console.log(number);
    }
}

function PrimeNumber(number) {
    for(let divider = 2; divider < number; divider++) {
        if(number % divider === 0) {
              return false;
        }
    }
    return true;
}