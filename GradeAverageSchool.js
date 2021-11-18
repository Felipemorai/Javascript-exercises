/* Exercise grade school */
/* Get the average from an array */

/* 0-59: F */
/* 60-69: D */
/* 70-79: C */
/* 80-89: B */
/* 90-100: A */
const array = [70,70,80];

console.log(studentAverage(array));

function studentAverage(grades) {
    const average = calculateAverage(grades)
    if (average >= 0 && average <= 59)
        return 'F';
    if (average >= 60 && average <= 69)
        return 'D';
    if (average >= 70 && average <= 79)
        return 'C';
    if (average >= 80 && average <= 89)
        return 'B';
    
        return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    return sum/(array.length);
}