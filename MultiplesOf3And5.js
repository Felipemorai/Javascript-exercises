/* Create add function that returns to */
/* Sum of all multiples of 3 and 5 */

/* Multiples of 3 inside 10 */
/* 3,6,9 */
/* Multiples of 5 inside 10 */
/* 5,10 */

/* Adding the multiples */
/* Store multiples of 3 */
/* Store multiples of 5 */

sum(10);
function sum(limit) {
    let multiplesOf3 = 0;
    let multiplesOf5 = 0;

    for(i = 0;i <= limit;i++) {
       if(i % 3 === 0)
        multiplesOf3 += i;
       if(i % 5 === 0)
        multiplesOf5 += i;
    }
    console.log(multiplesOf3 + multiplesOf5);
}