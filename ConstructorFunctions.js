/* This a factory function */
/* camelCase - oneTwoThreeFour */
/* function createCellPhone(cellPhoneBrand, screenSize, batteryPower) {
    return {
        cellPhoneBrand,
        screenSize,
        batteryPower,
        call() {
            console.log('Making a call...')
        }
    }
} */
/* This a Constructor Function */
/* Pascal Case - OneTwoThreeFour */
function CellPhone(cellPhoneBrand, screenSize, batteryPower) {
    this.cellPhoneBrand = cellPhoneBrand,
    this.screenSize = screenSize,
    this.batteryPower = batteryPower,
    this.call = function() {
        console.log('Making a call...');
    }
}

const cellPhone = new CellPhone('asus', 5.1, 3500);
console.log(cellPhone);