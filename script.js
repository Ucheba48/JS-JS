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

let age = 17 
// < 16 boy
// 16 <21 young man
// 21 < Mr.
let gender = 'Male'

let prefix

if ((age > 18) && (gender == 'Male')) {
    prefix = 'Mr.'
} else if ((age > 18) && (gender == 'Famale')){
    prefix = 'Mrs'
} else if ((age <= 18) && (gender == 'Male')) {
    prefix = 'boy'
} else if ((age <= 18) && (gender == 'Famale')) {
    prefix = 'girl'
}
if (age = 18) {
    if (gender == 'Male') {
        prefix = 'Mr'
    } else {
        prefix = 'Mrs.'
    }
} else {
    if (gender == 'Male')
}
console.log(prefix);