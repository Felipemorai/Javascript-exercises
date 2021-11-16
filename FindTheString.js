/* Create a method to read an object´s properties and */
/* Display only string type properties that are in this object */
const movie = {
    title : 'Euphoria',
    age : 2019,
    director : 'Drake',
    charactor : 'Nate Jacobs'
}

displayProperties(movie);

function displayProperties(obj) {
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}