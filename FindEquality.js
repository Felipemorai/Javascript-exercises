/* Object equality */

function Address(street,town,cep) {
    this.street = street,
    this.town = town,
    this.cep = cep
}

const address1 = new Address('Dr. Leandro Correa', 'Várzea Alegre', '63540-000');
const address2 = new Address('Vírgilio Moreno', 'Várzea Alegre', '63540-000');
const address3 = address1;

function areTheSame(address1,address2) {
    /* Compare if the properties are the same */
    return address1.street === address2.street &&
        address1.town === address2.town &&
        address1.cep === address2.cep;
}

console.log(areTheSame(address1,address2));

function hasTheSameMemoryAddress(address1, address2) {
    /* Comparing if the object reference points to the same
    memory location */
    return address1 === address3;
}

console.log(hasTheSameMemoryAddress(address1,address2));