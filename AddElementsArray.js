/* Add elements in array */
const number = [1,2,3];

/* begin */
number.unshift(0);
console.log(number);
/* Middle */
number.splice(1,0,'a');
console.log(number);
/* The end */
number.push(5);
console.log(number);
