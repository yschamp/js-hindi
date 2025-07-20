// Promise is an object that represents the eventual completion of an async operation
// Promise lets async operations return values like sync methods. Not necessarily immediately 
// but sometime in the future when the operations are completed. It allows us to attach
// handlers for success and failure scenarios

// History - Bluebird

const promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Hi I\'m Yuvraj')
    },2000)
})

const promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Hello👋! You are in promise2 ')
        resolve({ username: "yuvraj", password: "ahmedabad" })
    },2000)
})

promise2
 .then(function(usercreds){
    console.log(usercreds)
    return usercreds.username
})
 .then(function(data){
    console.log(data)
}).then(function(){
    console.log('Complete promise 2')
})

// You cannot add another async task in promise
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Hello👋! You are in promise2 ')
        resolve({ username: "yuvraj", password: "ahmedabad" })
    },2000)
})

promise3
 .then(function(usercreds){
    setTimeout(function(){
        console.log(usercreds)
        return usercreds.username
    },1000)
})
 .then(function(data){
    console.log('ABC')
    console.log(data)
})

const promise4 = new Promise(function(resolve, reject){
    let error = false
    if(!error){
        resolve(12345)
    } else{
        reject('Failure')
    }
})
promise4.then(function(data){
    console.log(data)
})
.catch(function(message){
    console.log(message)
})
.finally(function(){
    console.log('Operation completed')
})

// Db Call, API Call, attach event
// Async await is another way of writing promises. It only returns resolved value
const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        const res = {user: 'chai', pass: 'code'}
        resolve(res)
    },1000)
})
async function getData(){
    const res = await promise5
    console.log(res)
}

getData()


async function fetchAPI() {
try {
    const data = await fetch('https://jsonplaceholder.typicode.com/usrs')
    const users =  await data.json()
    console.log(users)
} catch (error) {
    console.log(error)
}
}

setTimeout(function(){
    fetchAPI()
},7000)

// Fetch API was introduced in node in April 2022
// Earlier backend engineers used to write lengthy xHttpRequest to inorder
// to talk to another system

// Fetch API is given high priority and also has a special microtask queue to handle it
