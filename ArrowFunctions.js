/* Arrow Functions */

const brands = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

console.log(brands.find(brand => {
    return brand.name === 'a';
}));

brands.find(brand => {
    brand.name === 'a'
});