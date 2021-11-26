/* Spread Operator */
const first = [1,2,3];
const second = [4,5,6];

/* Const combined = first.concat(second); */
const combined = [...first,'and',...second];
console.log(combined);
/* Const cuttOff = combined.slice(); */
const cloned = [...combined];
console.log(cloned);

/* Spread */