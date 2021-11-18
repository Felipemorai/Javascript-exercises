/* Create a function that displays how much that line has */
displayAsterisks(10);

function displayAsterisks(lines) {
    let pattern = '';
    for(let line = 1; line <= lines; line++) {
        pattern += '*';
        console.log(pattern);
    }
    /* Second way to solve */
    /* for(let line = 1; line <= lines;line++) {
        let pattern = '';
        for(let i = 0; i < lines; i++) {
            pattern += '*';
        }
        console.log(pattern);
    } */
}