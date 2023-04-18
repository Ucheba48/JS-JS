//const numsArray = [1, 2, 3, 4, 5]
/*
let mult = 1
for (let i = 0; i < numsArray.length; i++) {
    mult = numsArray[i] * 2 * mult
}
*/
/*
let a = 0
let mult = 1
while (a < numsArray.length) {
    mult = numsArray[a] * 2 * mult
    a++
}
*/
/*
let mult = 1
for (let index in numsArray) {
    mult = numsArray[index] * 2 * mult
}
*/
/*
let mult = 1

for (let el of numsArray) {
    mult = el * 2 * mult
}
*/
/*
let mult = 1
numsArray.forEach(function (el, index) {
    mult = el * 2 * mult
})
console.log(mult);
*/
const people = [5, 15, 24, 12, 70, 54, 18]
const adults = []
const children = []
/*
let adultsIndex = 0
let childrenIndex = 0
for (let index = 0; index < people.length; index++) {
    if (people[index] > 17) {
        adults[adultsIndex] = people[index]
        adultsIndex++
    } else {
        children[childrenIndex] = people[index]
        childrenIndex++
    }
}
*/
for (let el of people) {
    if(el > 17) {
        adults.push(el)
    } else {
        children.push(el)
    }
}

console.log(adults);
console.log(children);

let n = 12
let primar =[]
if (n > 0) {
    let number = 1
    while (primar.length < n) {
        let isPrimar = true
        for (let del = 2; del < number - 1; del++) {
            if (number % del == 0) isPrimar = false
        }
        if (isPrimar) primar.push(number)
        number++
    }
}
console.log(primar);

let fibo = [0, 1]
let n1 = 10
let lastElem = fibo[fibo.length - 1]
if (n > 2) {
    while (fibo.length < n1) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2])

    }
}
console.log(fibo);

let n2 = 8
if (n > 0) {
    let mult1 = 1
    for (let i = 1; i <= n2; i++) {
    mult1 =mult1 * i

    }
console.log(mult1);
}



 

