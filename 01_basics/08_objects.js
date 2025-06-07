// Constructor - Singleton
let students = new Object()
students.name = "Yuvraj"

// Literal
let key = Symbol('Key')
let user = {
    name: "Yuvraj",
    age: 29,
    email: "yuvraj@gmail.com",
    city: "Ahmedabad",
    pin: 380015,
    "full name": "Yuvraj Singh",
    [key]: 'myKey',
    address: {
        street: "Prernatirth Road",
        area: "Satellite"
    },
    greeting: function() {
        console.log(`Hi there, ${this["full name"]}`)
    }
}

console.log(user.email)
console.log(user["full name"])
console.log(typeof user[key])

user.email = "yuvraj@google.com"
user["full name"] = "Yuvraj Singh Champawat"
console.log(user.email)
console.log(user["full name"])
Object.freeze(user)
user.email = "yuvraj@microsoft.com"
console.log(user.email)

const num1 = { 1: "a", 2: "b" }
const num2 = { 3: "c", 4: "d" }

console.log({ num1, num2 })

// let combined = Object.assign({}, num1, num2)
// console.log(combined);

let combined = { ...num1, ...num2 }
console.log(combined);

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(Object.hasOwnProperty("names"))


// Destructure
const { name: userName = '', email = '', isLoggedIn = undefined } = user
console.log(userName)
console.log(isLoggedIn)
console.log(user.address.area?.latitude)

// [
//     {},
//     {},
//     {}
// ]


console.log(user.greeting())






