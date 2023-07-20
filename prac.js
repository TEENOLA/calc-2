const buttons = document.querySelectorAll('button');
const screen = document.querySelector('#screen')

let accumulativeInput
let input = []
function calculate(button){
  const buttonVal = button.textContent

  input.push(buttonVal)
  accumulativeInput = input.join('')
  screen.textContent = accumulativeInput

  console.log(input)

}


buttons.forEach(button => button.addEventListener('click', () => calculate(button)))