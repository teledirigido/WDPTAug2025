/*
 numbers
 strings
 object
 null
 undefined
*/

let username = { 
  firstname: 'miguel', 
  role: 'admin',
  age: 99,
  isEnabled: true,
  address: {
    address_line_1: 'bla bla bla #132',
    postcode: '08003'
  }
}

let color = 'blue';


const message = `Hello, your role is ${username.role}. ${username.address.postcode}`;
// username['address']['postcode']
// console.log(message)

let country = 10;
let city = '20';
const result = country + city;
// console.log(result)

const greeting = 'Hi there, my name is Admin';
const greetingLength = greeting.length;
// console.log(greetingLength)
// console.log(greeting.charAt(10) )

// console.log('ABCD'.length)
// console.log('ABCD'.charAt(0).toLowerCase('b').toUpperCase())

let anyNumber = 5.979345;
// console.log('Round: ', Math.round(anyNumber));
// console.log('Round up: ', Math.ceil(anyNumber));
// console.log('Round down: ', Math.floor(anyNumber));

// console.log(Math.ceil(Math.random() * 10));
// console.log(Math.random());

// AND operator
// console.log("AND operator result: ", true && true && true && false);

// OR operator
// console.log("OR operator result: ", true || false);

// Not operator
// console.log("NOT operator result: ", !'' )

let myCity = 'Barcelona';
console.log(myCity[0]);
myCity[0] = 'b' // will remain as Barcelona