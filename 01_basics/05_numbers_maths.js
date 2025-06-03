let score = 33
let balance = new Number(100)
const fees = 100000000
const amount = 123.396
console.log(score)
console.log(balance)
console.log(score.toFixed(5).length)
console.log(fees.toLocaleString('en-IN'))
console.log(amount.toPrecision(4))
console.log(typeof amount.valueOf())


console.log(Number.isNaN(Number("abc")))
console.log(Number.isFinite(2));



/**
 * Maths operations
 */

console.log(Math.abs(-7))
console.log(Math.max(9,1,0,4))
console.log(Math.min(9,1,0,4))
console.log(Math.round(23.970))
console.log(Math.round(23.570))
console.log(Math.ceil(23.1))
console.log(Math.floor(23.9))
console.log(Math.random())

// Dice operation
console.log(Math.floor((Math.random() * 6) + 1));

// Find the random value between 20 and 100
const min = 20
const max = 100

console.log(Math.floor(Math.random() * (max - min + 1)) + min);







