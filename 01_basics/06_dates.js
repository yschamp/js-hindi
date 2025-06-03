let myDate = new Date()

console.log(myDate)


console.log(myDate.getTime()) // Milliseconds
console.log(myDate.toDateString());
console.log(myDate.toLocaleString('default', {
    month: 'long',
    day: '2-digit',
    weekday: 'long',
    year: 'numeric'
    // timeZone: ''
}));

console.log(Date.now())

const newDate = new Date(2025, 0, 24, 7, 18)
console.log(newDate)

console.log(newDate.getTimezoneOffset());

const otherDate = Date.now()
const indianOffset = 5.5 * 60
const indianTime = otherDate + (indianOffset * 60 * 1000)
console.log(new Date(indianTime).toLocaleString('default', {
    'timeStyle': 'long'
}))
