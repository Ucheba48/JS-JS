//@ts-check
//alert('Hello there')
//window.onload = function()
//const h1 = document.querySelector('h1')
let user ='John'
let user2
//.....
user2 = 'Jane'
const user3 = 'Bob'
//user3 = 'Alice'

let string = 'Hello world'
let num = -34
let boolean = false // false
let Null = null
let Undefined = undefined
let symbol = Symbol('First symbol')
if (num > 20) {
    console.log('The num is more than 20')
} else if(num > 10) {
    console.log('The num is more than 10')
} else {
    console.log('The num is more than 10')
}
/*
let age = 15 
// < 16 boy
// 16 <21 young man
// 21 < Mr.
let gender = 'Female' // 'Male'

let prefix // boy | Mr. | girl |Mrs.

if ((age > 18) && (gender == 'Male')) {
    prefix = 'Mr.'
 } else if ((age > 18) && (gender == 'Famale')){
    prefix = 'Mrs'
 } else if ((age <= 18) && (gender == 'Male')) {
    prefix = 'boy'
 } else if ((age <= 18) && (gender == 'Famale')) {
    prefix = 'girl'
 }
 if (age > 18) {
    if (gender == 'Male') {
        prefix = 'Mr'
    } else {
        prefix = 'Mrs.'
    }
 } else {
    if (gender == 'Male') {
        prefix = 'boy'
    } else {
        prefix = 'girl'
    }
 }
 prefix = (age > 18)
    ? (gender == 'Male') ? 'Mr' : 'Mrs.'
    : (gender == 'Male') ? 'boy' : 'girl' 
 console.log(prefix);
 */
let price
let city = 'Volgograd'

switch (city) {
    case 'Moscow':
        price = 10 
        break;
    case 'Berlin':
        price = 9
        break;
    case 'Paris':
        price = 8
        break
    default:
        price = 15
        break;
}
console.log('Price: $' + price);
console.log(`Price (${city}): $ ${price}`);

/*
let counter = 0
while (counter < 11) {
    console.log(counter);
    counter++
}
*/
/*
 for (let i = 0; i < 11; i++) {
    console.log(i);
 }
*/
/*
let numOfPersons = 26
let numOfChild = 0
let numOfAdult = 0
let age1 = 1
while (age1 <= numOfPersons) {
    if (age1 < 18) {
        numOfChild++
    } else {
        numOfAdult++
    }
    age1++
}
*/
/*
for (let age1 = 1; age1 <= numOfPersons; age1++) {
    if (age1 < 18) {
        numOfChild++
    } else {
        numOfAdult++
    }
}

console.log('Num of Child: ' + numOfChild);
console.log('Num of Adult: ' + numOfAdult);
*/
let arrayOfAge = [13, 12, 7, 28, 45, 63, ]