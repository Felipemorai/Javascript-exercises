const cellPhone = {
    cellPhoneBrand : 'Apple',
    screenSize : {
        vertical: 155,
        horizontal: 75
    },
    call : function() {
        console.log('Making a call... ');
    }
}

const newObject = Object.assign({
    batteryPower: 4500
},cellPhone);
console.log(newObject);

const object2 = {...cellPhone};
console.log(object2);