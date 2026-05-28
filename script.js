let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    // Start your code here
    // You may move this JS to another file if you wish


    // console.log
    const consoleLogBtn = document.getElementById('console-log');
    const consoleErrorBtn = document.getElementById('console-error');
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
                { name: 'Nishant', age: 19}
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

 