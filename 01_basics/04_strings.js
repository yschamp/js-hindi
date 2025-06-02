let name = "Yuvraj"
let email = new String("ys@ys.com")

// console.log(typeof name);
// console.log(typeof email);

console.log(name+ ":" + email)
console.log(":", email)
console.log(`${name} : ${email}`) // String interpolation

console.log(email.length)
console.log(email.trim())
console.log(email[0])
console.log(email.charAt(4))
console.log(email.lastIndexOf('s'))
console.log(email.startsWith('s'));
console.log(email.substring(2,4))
console.log(email.slice(-2,))
console.log(email.replace("ys", "hello"))
console.log(email.split('@'))
console.log(email.search('$y'))
