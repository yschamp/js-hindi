displayCataloguePrice()
function displayCataloguePrice() {
    console.log(`Hi there, the price of product is $900`)
}


function displayProductPrice(username, price){
    console.log(`Hi ${username}, the price of product is ${price}`)
}

// displayProductPrice("Yuvraj", "$999")

function displayUserDetails(username, email, mobile = "", ...others){
    console.log(others)
    console.log(`Hi ${username}, Welcome. Your email id is ${email}. Your mobile number is ${mobile}. And rest of the details are ${others}`)
}
const user = {
    username: "Shivani",
    email: "shivani@gmail.com",
    mobile: 84678232312,
    city: "ahmedabad",
    price: 4000,
    displayName: function(){
        console.log(`Hi ${this.username}`)
    }
}

displayUserDetails(user.username, user.email, user.mobile, user.city, user.price)
// displayUserDetails(user.username, user.email)

function displayUser(params){
    console.log(`Hi ${params.username}, Welcome. Your email id is ${params.email}. Your mobile number is ${params.mobile}.`)
    params.displayName()
}

displayUser(user)

// addTwoNumbers(2,3)

const addTwoNumbers = function(num1, num2) {
    console.log(num1+num2)
}


function one(user){
    const a = 10
    function two(){
        const a = 20
        return
        console.log(a)
        // console.log(this.username)

    }
    two()
    console.log(a)
}

one(user)


// Arrow functions
// const three = (num1, num2, num3) => num1 + num2 + num3

const three = (num1, num2, num3) => {
    return num1 + num2 + num3
}


console.log(three(1, 2, 3))

// IIFE - Immediately invoked functions
// Normal function defination adds this global object. If we do not need it we can use IIFE
// These functions are executed when declared and defined
function two(num1, num2){
    // console.log(this)
    return num1 + num2
}
console.log(two(1, 2));

(function chai(num1, num2, num3, num4){
    // named IIFE
    console.log(num1 + num2 + num3 + num4)
})(1, 2, 3, 4);

((name) => {
    console.log(name)
})('yuvraj')


// ({
//     console.log('Hi')
// })()
