const age = 18

if(age > 18) {
    console.log("You are an adult and hence eligible for voting")
}

const num = 24
if(num % 2 == 0){
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is an odd number`)
}

const month = 3
if(month === 1) {
    console.log(`January`)
} else if(month === 2) {
    console.log(`February `)
} else if(month === 3) {
    console.log(`March`)
} else {
    console.log(`Others`)
}

switch(month) {
    case 1: console.log(`January`)
    break
    case 2: console.log(`February `)
    break
    case 3: console.log(`March`)
    break
    case 4: console.log(`April`)
    break
    default:
        console.log(`Others`)
}

// > , < , >=, <=, ==, !=, ===, !===

const userLoggedIn = true
const paymentDone = false

if(userLoggedIn && paymentDone) {
    console.log(`You are welcome to the course`)
}

if(!userLoggedIn || !paymentDone) {
    console.log(`You are not welcome to the course`)
}

//Falsy values
// 0, -0, BigInt 0n, "", null, undefined, false, NaN

// Truthsy values
// [], {}, 123, "0", " ", true, 'false', function(){}

// Null Coalescing operator ?? - a ?? b ?? c -> returns the first non-null, non-undefined
// value from left. Useful handling scenarios when db or api returns a null

console.info(10 ?? "Hi")
console.info(null ?? 20)
console.info(null ?? undefined ?? "Hey")


