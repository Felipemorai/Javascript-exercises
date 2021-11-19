/* Javascript - Factory Functions */

const cellPhone = {
    cellPhoneBrand :'Iphone',
    screenSize : {
        vertical : 155,
        horizontal : 75
    },
    batteryPower: 5000,
    call : function() {
        console.log('Making a call...')
    }
}

function createCellPhone(cellPhoneBrand,screenSize,batteryPower) {
    return {
        cellPhoneBrand,
        screenSize,
        batteryPower,
        call() {
            console.log('Making a call...')
        }
    }
    
}

const cellPhone1 = createCellPhone('Samsung',5.5,5000);
console.log(cellPhone1);

const cellPhone2 = createCellPhone('LG',6.1,4000);
console.log(cellPhone2);