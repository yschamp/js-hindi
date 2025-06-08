const a = 10 // block scope
let b = 20 // block scope
var c = 30 // global scope

{
    const a = 50
    let b = 60
    var c = 70
    
    // console.log(a)
    // console.log(b)
    // console.log(c)
    
}

// console.log(a)
// console.log(b)
// console.log(c)

{
    const d = 50
    let e = 60
    var f = 70
}

// console.log(d)
// console.log(e)
// console.log(f)



console.log(this) // This returns empty object. However note that this returns Window Object(event listeners) in browsers

function one(){
    const username = "yuvraj"
    console.log(this)
    // console.log(this)  // Global object
}
// one()

const two = function(){
    const username = "yuvraj"
    console.log(username)
    // console.log(this) // Global Object
}

two()

const user = {
    username: "Shivani",
    email: "shivani@gmail.com",
    mobile: 84678232312,
    city: "ahmedabad",
    price: 4000,
    displayName: function(){
        console.log(this)
    }
}
user.displayName()





