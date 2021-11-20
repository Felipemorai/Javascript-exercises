/* Address object */

/* Create an address object that contains */
/* Street */
/* Town */
/* CEP */
/* displayAddress(address) */

let address = {
    street: 'Dr. Leandro Correa',
    town: 'Várzea Alegre',
    cep: '63540-000'
};

function displayAddress(address) {
    for (let key in address)
        console.log(key,address[key]);
}

displayAddress(address);