// DOM gives us the ability to manipulate the html

// 1. Find the elements
document.getElementById('firstHeading')
document.getElementsByClassName('heading')
document.querySelector('h1')
document.querySelector('#para')
document.querySelector('#heading')
document.querySelector('h1[class]') // selects a h1 element which has a class attribute
document.querySelector('h1[class = heading]') // selects a h1 element which has a class attribute = heading
const odds = document.querySelectorAll('li:nth-child(2n+1)') // selects odd items of list
odds.forEach(function (item) {
    item.style.backgroundColor = 'green'
    item.style.color = 'red'
})

// 2. Find an attribute
document.getElementById('firstHeading').id
document.getElementById('firstHeading').className
document.getElementById('firstHeading').getAttribute('id')
document.getElementById('firstHeading').getAttribute('class')

// 3. Update/add the value of an attribute
document.getElementById('firstHeading').setAttribute('class', 'heading heading2')


// 4. Get a style property
document.getElementById('firstHeading').style.backgroundColor

// 5. Update/add a style property
document.getElementById('firstHeading').style.backgroundColor = 'green'

//6. Get textnode of an element
document.getElementById('para').innerHTML // displays all data including sub html
// elements whithout rendering them
document.getElementById('para').textContent // displays all data including content that
// that is hidden or manipulated using css properties
document.getElementById('para').innerText // displays the content as shown on screen
// hides hidden data



// Activity
// 1. Change the style of first element of a unordered list
const myul = document.querySelector('ul')
const myli = myul.querySelector('li:first-child')
myli.style.backgroundColor = "green"


// 2. NodeList -  querySelectAll outputs a collection of items in form of a nodelist
const liList = document.querySelectorAll('li')
liList.forEach(function (li) {
        li.style.backgroundColor = 'green'
})

// 3. HTML Collection - getElementByClassname outputs a collection of items in form of a html collection
const h1List = document.querySelectorAll('h1')
const arr = Array.from(h1List)
arr.forEach(function (li) {
    li.style.color = 'orange';
    li.style.padding = '10px'
})
