/* Logical Operator AND (&&) */
/* Returns TRUE if both operands are true */

console.log(true && true);

/* let ofLegalAge = true;
let hasWorkCard = true;
let canApply = ofLegalAge && hasWorkCard;

console.log(canApply); */

/* Logical Operator OR (||) */
/* Returns TRUE if one of the operands are true */

let ofLegalAge = false;
let hasWorkCard = true;
let canApply = ofLegalAge || hasWorkCard;

console.log('Can apply: ', canApply);

/* Logical Operator NOT (!) */
let rejectedCandidate = !canApply;

console.log('Rejected candidate: ', rejectedCandidate);