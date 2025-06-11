["", "", ""]
[{}, {}, {}]
// For of
// Arrays
const heroes = ["shaktiman", "batman", "superman"]
for (const element of heroes) {
    // console.log(element)
}

// Objects
const user = {
    name: "yuvraj",
    mobile: 8980887407
}

for (const index of Object.keys(user)) {
    // console.log(user[index])
}
// for (const [k,v] of user) {
//     // console.log(k)
// }

// Maps
const map = new Map()
map.set("name", "Yuvraj")
map.set("mobile", 8980887407)

for (const [key, value] of map) {
    // console.log(`${key}: ${value}`)
}


// For In - Object preferrable
const product = {
    name: "soap",
    price: "100"
}

for (const key in product) {
    // console.log(product[key])
}


for (const key in heroes) {
    // console.log(heroes[key])
}

for (const key in map) {
    console.log(key)
}

const result = heroes.forEach(function(item, index, arr){
    console.log(item, index, arr)
})

console.log(result)

const books = [
   { name: "book1", genre: "history", publish: 2008, price: 199},
   { name: "book1", genre: "fiction", publish: 1999, price: 499},
   { name: "book1", genre: "biography", publish: 2012, price: 699},
   { name: "book1", genre: "history", publish: 1982, price: 199}
]

const newbooks = books.filter((bk) =>  bk.genre === "history" && bk.publish > 2000)
console.log(newbooks)


const nums = [1, 2, 3, 4, 5, 6, 7]
const updatedNums = nums
                    .map((num) => (num * 10))
                    .map((item) => item + 1)
console.log(updatedNums)

// const totalPrice = books.reduce((acc, bk) => acc + bk.price, 0)
const totalPrice = books.reduce((acc, bk) =>{
    if(bk.publish > 2000)
        return acc + bk.price
    }, 0)
console.log(totalPrice)
