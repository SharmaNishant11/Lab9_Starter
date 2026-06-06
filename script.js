let form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;

  // try/catch/finally with throw 
  try {
    if (firstNum === '' || secondNum === '') {
      throw new ValidationError('Both input fields must be filled out');
    }
    if (operator === '/' && Number(secondNum) === 0) {
      throw new ValidationError('Cannot divide by zero');
    }

    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);

  } catch (error) {
    console.error('Calculation error:', error);
    output.textContent = error.message;

  } finally {
    console.log('Calculation attempt finished');
  }
});


//  Custom error class extending Error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}


let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// console.log
const consoleLogBtn = document.getElementById('console-log');
const consoleErrorBtn = document.getElementById('console-error');
const consoleCountBtn = document.getElementById('console-count');
const consoleWarnBtn = document.getElementById('console-warn');
const consoleAssertBtn = document.getElementById('console-assert');
const consoleClearBtn = document.getElementById('console-clear');
const consoleDirBtn = document.getElementById('console-dir');
const consoleDirxmlBtn = document.getElementById('console-dirxml');
const consoleGroupStartBtn = document.getElementById('console-group-start');
const consoleGroupEndBtn = document.getElementById('console-group-end');
const consoleTableBtn = document.getElementById('console-table');
const startTimerBtn = document.getElementById('start-timer');
const endTimerBtn = document.getElementById('end-timer');
const consoleTraceBtn = document.getElementById('console-trace');
const triggerGlobalErrorBtn = document.getElementById('trigger-global-error');

consoleLogBtn.addEventListener('click', () => {
  console.log('Button was clicked!');
});

consoleErrorBtn.addEventListener('click', () => {
  console.error('This is an error message!');
});

consoleCountBtn.addEventListener('click', () => {
  console.count('Button clicked');
});

consoleWarnBtn.addEventListener('click', () => {
  console.warn('This is a warning message!');
});

consoleAssertBtn.addEventListener('click', () => {
  console.assert(1 === 2, 'Assertion failed: 1 is not equal to 2');
});

consoleClearBtn.addEventListener('click', () => {
  console.clear();
});

consoleDirBtn.addEventListener('click', () => {
  console.dir(document.body);
});

consoleDirxmlBtn.addEventListener('click', () => {
  console.dirxml(document.body);
});

consoleGroupStartBtn.addEventListener('click', () => {
  console.group('My Group');
  console.log('Inside the group');
});

consoleGroupEndBtn.addEventListener('click', () => {
  console.groupEnd();
});

consoleTableBtn.addEventListener('click', () => {
  const data = [
    { name: 'Powell', age: 30 },
    { name: 'Nishant', age: 19 }
  ];
  console.table(data);
});

startTimerBtn.addEventListener('click', () => {
  console.time('My Timer');
});

endTimerBtn.addEventListener('click', () => {
  console.timeEnd('My Timer');
});

consoleTraceBtn.addEventListener('click', () => {
  function a() {
    function b() {
      console.trace('Trace message');
    }
    b();
  }
  a();
});

// window.onerror 
window.onerror = function (message, source, lineno, colno, error) {
  console.log(`Global error caught: "${message}" at line ${lineno}`);

};

// Triggers a ReferenceError 
triggerGlobalErrorBtn.addEventListener('click', () => {
  setTimeout(() => {
    undefinedFunction(); /
  }, 0);
});