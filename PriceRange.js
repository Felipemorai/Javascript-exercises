/* Price Range */
/* Create an array of price range objects so it can be used on 
the website just like the free market */
/* range, tooltip, minimum and maximum */

/* First option */
let ranges = [
    {tooltip: 'até R$700', minimum: 0, maximum: 700},
    {tooltip: 'de R$700 a R$1000',  minimum: 700, maximum: 1000},
    {tooltip: 'R$1000 ou mais', minimum: 1000, maximum: 999999}
];

/* Second option (Factory function) */
function createPriceRange(tooltip,minimum,maximum) {
    return {
        tooltip,
        minimum,
        maximum
    }
}

let ranges2 = [
    createPriceRange('a', 0, 700),
    createPriceRange('b', 700, 1000),
    createPriceRange('c', 1000, 10000)
]

/* Third option (Constructor function) */
function PriceRange(tooltip,minimum,maximum) {
    this.tooltip = tooltip,
    this.minimum = minimum,
    this.maximum = maximum
}

let ranges3 = [
    new PriceRange('d',10,20),
    new PriceRange('e',20,30),
    new PriceRange('f',30,40)
];

console.log(ranges);
console.log(ranges2);
console.log(ranges3);