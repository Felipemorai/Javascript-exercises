/* Emptying an array */
let numbers = [1,2,3,4,5,6];
let others = numbers;
/* Solution 1 */
/* numbers = []; */
/* console.log(others); */

/* Solution 2 The better option*/
numbers.length = 0; 
console.log(numbers); 
console.log(others); 

/* Solution 3 */
/* numbers.splice(0,numbers.length);
console.log(numbers);
console.log(others); */

/* Solution 4 */
/* while (numbers.length > 0)
    numbers.pop(); */