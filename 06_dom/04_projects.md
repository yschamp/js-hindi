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
