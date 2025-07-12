# DOM Projects

[Click here to view the projects](https://stackblitz.com/edit/dom-project-chaiaurcode-8hopqchn?file=index.html)

## Solutions

### Project 1: Color changer
```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    const color = e.target.id;
    body.style.backgroundColor = color;
  });
});

```

### Project 2: BMI Calculator

```
const form  = document.querySelector('form')

form.addEventListener('submit', function(e) {
  e.preventDefault()
  let height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.appendChild(document.createTextNode('Please enter a valid height'))
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.appendChild(document.createTextNode('Please enter a valid weight'))
  } else {
    const bmi = (weight / (height * height /10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
    const div = document.createElement('div')
    let message
    if(bmi < 18.6) {
      message = "Under weight"
    } else if(bmi >= 18.6 && bmi < 24.9) {
      message = 'Normal weight'
    } else{
      message = 'Overweight'
    }
    div.innerHTML = message
    results.appendChild(div)
  }
})
```

### Project 3: Clock

```
const time = document.querySelector('#clock');

setInterval(function () {
  const date = new Date().toLocaleTimeString('en-IN');
  time.innerHTML = date;
}, 1000);

```

### Project 4: Guess the number
```
let randomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const prevGuessList = document.querySelector('.guesses');
const count = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const resultParams = document.querySelector('.resultParas');

let prevGuess = [];
let guessCount = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(randomNumber);
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage('Invalid value');
  } else if (guess < 0) {
    displayMessage('Number must be greater than 0');
  } else if (guess > 100) {
    displayMessage('Number must be lesser than 100');
  } else {
    prevGuess.push(guess);
    guessCount += 1;
    if (guessCount == 11) {
      displayMessage('Game Over! You have exhaused all attempts');
      endGame();
    }
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess < randomNumber) {
    displayMessage('Number is too low');
  } else if (guess > randomNumber) {
    displayMessage('Number is too high');
  } else {
    displayMessage('Congrats! You have guessed it right');
    endGame();
  }
}
function displayGuess(guess) {
  input.value = '';
  const rem = 10 - guessCount;
  count.innerHTML = `${rem}`;
  prevGuessList.innerHTML += `${guess},`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = message;
  if (guessCount == 10) {
    input.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    endGame();
  }
}

function endGame() {
  playGame = false;
  const btn = document.createElement('button');
  btn.innerHTML = 'Start Game';
  btn.classList.add('btn');
  resultParams.appendChild(btn);
  newGame();
}

function newGame() {
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    input.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    prevGuess = [];
    guessCount = 0;
    playGame = true;
    lowOrHigh.innerHTML = '';
    randomNumber = Math.floor(Math.random() * 100 + 1);
    prevGuessList.innerHTML = '';
    count.innerHTML = '10';
    resultParams.removeChild(btn);
  });
}

```

### Project 5: Keyboard key 

```
const insert = document.getElementById('insert');

window.addEventListener('keydown', function (e) {
  insert.innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
  `;
});

```

### Project 6: Change background every second

```
// get a random color
function randomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const idx = Math.floor(Math.random() * 16);
    color = color + hex.charAt(idx);
  }
  return color;
}

// add click event listener on start and setInterval
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const body = document.querySelector('body');

let id;
start.addEventListener('click', function () {
  id = setInterval(function () {
    let color = randomColor();
    body.style.backgroundColor = color;
  }, 1000);
});

// add click event listener on stop and
// clearInterval
stop.addEventListener('click', function () {
  clearInterval(id);
});

```