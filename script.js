const calc = document.querySelector("#calc");
const display = document.querySelector("#display");
let calcString = "";
let dotEnabled = false;
let operatorEnabled = false;

calc.addEventListener('click', (Event) => {
  target = Event.target.id;
  if (target === '1' || target === '2' || target === '3'
   || target === '4' || target === '5' || target === '6'
   || target === '7' || target === '8' || target === '9'
   || target === '0') {
    updateCalc(target);
    dotEnabled = true;
    operatorEnabled = true;
  } 
  else if (target === 'dot' && dotEnabled === true) {
    updateCalc(target);
    dotEnabled = false;
  }
  else if (operatorEnabled === true && target === 'add'
        || target === 'subtract' || target === 'multiply' || target === 'divide') {  
    updateCalc(target);
    operatorEnabled = false;
  }
  else if (operatorEnabled === false && target === 'add'
        || target === 'subtract' || target === 'multiply' || target === 'divide') {  
    operate(calcString);
    updateCalc(target);
    operatorEnabled = true;
  }
  else if (target === 'clear') {
    clearCalc();
  }
  else if (target === 'equals') {
    operate(calcString);
  }
});

// operations
function add(n1, n2) {
  return n1 + n2;
}
function subtract(n1, n2) {
  return n1 - n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
function divide(n1, n2) {
  if (n2 == 0) {
    return "NICE TRY.";
  }
  return n1 / n2;
}

function operate(str) {
  if (str.includes('+')) {
    let nums = str.split('+');
    calcString = add(parseFloat(nums[0], 100), parseFloat(nums[1]));
    display.textContent = calcString;
  }
  else if (str.includes('-')) {
    let nums = str.split('-');
    calcString = subtract(parseFloat(nums[0]), parseFloat(nums[1]));
    display.textContent = calcString;
  }
  else if (str.includes('*')) {
    let nums = str.split('*');
    calcString = multiply(parseFloat(nums[0]), parseFloat(nums[1]));
    display.textContent = calcString;
  }
  else if (str.includes('/')) {
    let nums = calcString.split('/');
    calcString = divide(parseFloat(nums[0]), parseFloat(nums[1]));
    display.textContent = calcString;
  }   
}

function updateCalc(input) {
  if (calcString.length != 31) {
    switch (input) {
      case 'add':
        input = '+';
        break;
      case 'subtract':
        input = '-';
        break;
      case 'multiply':
        input = '*';
        break; 
      case 'divide':
        input = '/';
        break; 
      case 'dot':
        input = '.';
        break;
    }
    calcString += input;
    display.textContent = calcString;
  }
}

function clearCalc() {
  calcString = "";
  display.textContent = calcString;
}