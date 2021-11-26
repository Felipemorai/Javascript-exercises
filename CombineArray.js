/* Combining and cutting arrays */
const first = [{id: 1}];
const second = [4,5,6];
first[0].id = 10;

/* To combine */
const combined = first.concat(second);
console.log(combined);

/* To divide */
const cutOff = combined.slice(1,3);
console.log(cutOff);