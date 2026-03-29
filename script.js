// operations
let operator = "";
let n1 = 0;
let n2 = 0;

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
  return n1 / n2;
}

function operate(operator, n1, n2) {
  switch (operator) {
    case '+':
      return add(n1, n2);
    case '-':
      return subtract(n1, n2);
    case '*':
      return multiply(n1, n2);
    case '/':
      return divide(n1, n2);
  }
}

calc = document.querySelector("id", "calc");
display = document.querySelector("id", "display");

calc.addEventListener('click', (Event) => {
  target = Event.target.id;
  if (target === '1' || target === '2' || target === '3'
   || target === '4' || target === '5' || target === '6'
   || target === '7' || target === '8' || target === '9'
   || target === '0' || target === 'dot') {
      updateNumbers(target);
    } 
  else if (target === 'add' || target === 'subtract'
        || target === 'multiply' || target === 'divide') {
      updateOperator(target);
  }
  else if (target === 'clear') {
    clearCalc();
  }
  else if (target === 'clear') {
    operate(n1, n2, );
  }
})