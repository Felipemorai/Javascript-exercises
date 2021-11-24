/* Finding the referent type */
const brands = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Colgate'},
    {id: 3, name: 'Nutella'},
    {id: 4, name: 'Balanciaga'}
];

const brand = brands.find(function(brand) {
    return brand.name === 'Apple';
});

console.log(brand);