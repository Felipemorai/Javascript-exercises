/* Full speed up to 70 */
/* Every 5k over the limit you get 1 point */
/* If the points is greater than 12 -> 'Suspended driver's license  */

checkSpeed(130);

function checkSpeed(speed) {
    const fullSpeed = 70;
    const kmPerPoints = 5;
    if ( speed <= fullSpeed)
        console.log('Ok');
    else {
        const points = Math.floor(((speed - fullSpeed) / kmPerPoints));
        if(points >= 12)
            console.log('Suspended driver´s license');
        else 
            console.log('Points', points);
    }
}