/* Receive amount of values to evaluate */
/* Function displays whether each value is even or odd */

displayType(10);

function displayType(limit) {
    for (let i = 0; i <= limit; i++) {
        if ( i % 2 === 0)
            console.log(i,'EVEN');
        else
            console.log(i,'ODD');
    }
}