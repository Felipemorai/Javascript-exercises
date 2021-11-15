/* Full speed up to 70 */
/* Every 5k over the limit you get 1 point */
/* If the points is greater than 12 -> 'Suspended driver's license  */

checkSpeed(85);

function checkSpeed(speed) {
    if ( speed <= 70)
        console.log('Ok');
    else {
        const points = Math.floor(((speed - 70) / 5));
        if(points >= 12)
            console.log('Suspended driver´s license');
        else 
            console.log('Points', points);
    }
}