// Object literal = {}

const User = {
    name: "yuvraj",
    age: 30,
    city: "ahmedabad",
    hobbies: "reading",
    profession: "software engineer",
    getAge: function(){
        console.log(this)
        // return this.age
    }
}

// console.log(User)
// console.log(User.name)


// const userAge = User.getAge()
// console.log(userAge)

// This sets the context. Ex are we talking about last Monday, this Monday or next Monday
// console.log(this)
// User.getAge()


// In this example, initially the this = {}
// Everytime we call this function, this object gets overwritten and return this object
// Hence, this object will hold the values of last update
// That is the reason eventhough rakesh was updated it was overwritten in the 
// subsequent step to yuvraj

function createObject(name, age){
    this.name = name
    this.age = age
    console.log(this)
}

// let obj1 = createObject("rakesh", 31)
// let obj2 = createObject("yuvraj", 30)

// console.log(obj1)


// What is the solution to this problem?
// 1. Create separate objects for yuvraj and rakesh. This solution is not scalable
// what if I have requirement of creating thousands of such objects ?

// 2. Use new keyword
// With new keyword, everytime we call this function we get a new instance of Object
// like our own copy

function createObj(name, age){
    this.name = name
    this.age = age
}

let obj3 = new createObj("rakesh", 31)
let obj4 = new createObj("yuvraj", 30)

console.log(obj3)
console.log(obj4)

