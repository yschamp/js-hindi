const heroes = ['shaktiman', 'ironman', 'spiderman']
const obj1 = [23, "Yuvraj", true, null, undefined]

const age = new Array(0, 34, 67)

// console.log(heroes)
// console.log(obj)
// console.log(typeof age)

console.log(age[2])
age[1] = 46
// console.log(age)


// console.log(heroes.concat(obj))

heroes.push("batman")
heroes.push("flash")
// console.log(heroes)
// console.log(heroes.pop())
// console.log(heroes)


// console.log(heroes.includes('son pari'))

const verifyAdolescence = (age) => age > 18
// console.log(age.every(verifyAdolescence))


const newAge = age.filter(verifyAdolescence)
// console.log(newAge)

newAge[0]= 12
// console.log(newAge)
// console.log(age)


// console.log(age.indexOf(67))


const num1 = [1, 2, 3, 5]
const num2 = [7, 9, 34, [34, 67, [89]]]
// num1.concat(num2)
// console.log(num2.flat(Infinity))

// returns new array 
// console.log(num1.slice(-2))
// console.log(num1)

// Modifies same array
// num1.splice(1, 2, 98, 23)
// console.log(num1)


// removes first element
num1.shift()
console.log(num1)

num1.unshift(90,87)
console.log(num1)


const obj = {
    name: "Yuvraj",
    age: 29
}
console.log(Array.isArray(num1))
console.log(Array.of(34, 23, 65, 52))
console.log(Array.from([1,2,3], x => x*2))

