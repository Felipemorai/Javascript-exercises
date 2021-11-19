/* Dynamic nature of objects */
const mouse = {
    color: 'red',
    brand: 'dazz'
}
mouse.speed = 5000;
mouse.changeDPI = function () {
    console.log('change DPI');
}
delete mouse.speed;
delete mouse.changeDPI;
console.log(mouse);