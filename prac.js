const buttons = document.querySelectorAll('button');
let screen = document.querySelector('#screen');
let output = '0';
let runningCalc = '0';

function input(value){
  if(isNaN(parseInt(value))){
    forSymbol(value);
  } else {
    forNumber(value);
  }
  align();
}

function forNumber(number){
  if (output === '0'){
    output = number;
  } else {
    output += number;
  }
}

function mathSymbols(value){
  if(output === '0'){
    return;
  }
  
  const integerOutput = parseInt(output)

  if(runningCalc === '0'){
    runningCalc = integerOutput
  } else {
    calculate(integerOutput)
  }
  output = '0';
  lastSymbol = value;
  console.log(runningCalc)
}

function calculate(integerOutput){
  if( lastSymbol === '+'){
    runningCalc += integerOutput
  }
  if( lastSymbol === '-'){
    runningCalc -= integerOutput
  }
  if( lastSymbol === '*'){
    runningCalc *= integerOutput
  }
  if( lastSymbol === '/'){
    runningCalc /= integerOutput
  }
} 

function forSymbol(symbol){
  switch(symbol){
    case 'C':
      output = '0'
      break;
    case '←':
      if (output.length === 1){
        output = '0'
      }  else {
        output = output.substring(0, output.length - 1)
      }
      break;
    case '=':
    output = runningCalc;
    break;
    case '+':
    case '-':
    case '*':
    case '/':
      mathSymbols(symbol)
      break;
  }

}

function align(){
  screen.innerText = output;
}

buttons.forEach(button => button.addEventListener('click', (e) => input(e.target.innerText)))