// VARIABLES
let chrono = 0;
let timerId = null;

let chronoDom;
let startBtn;
let resetBtn;

// FUNCTIONS
function handleStart() {
    if (timerId === null || chrono === 0) {  
        console.log('start');
        startBtn.disabled = true;
		resetBtn.disabled = false;
        timerId = setInterval(() => {
            chrono++;
            chronoDom.innerText = chrono;
        }, 1000);
    }
}

function handleReset() {
    if (timerId !== null) {
        console.log('reset');
        startBtn.disabled = false;
		resetBtn.disabled = true;
        clearInterval(timerId);
        chrono = 0;
        chronoDom.innerText = chrono;
    }
}

// PRINCIPAL CODE
document.addEventListener('DOMContentLoaded', function() {
    //console.log('DOM loaded');

    chronoDom = document.getElementById('counter');
    //console.log(chronoDom);
    
    startBtn = document.getElementById('startBtn');
    //console.log(startBtn);
    
    resetBtn = document.getElementById('resetBtn');
    //console.log(resetBtn);

    startBtn.addEventListener('click', handleStart);

    resetBtn.addEventListener('click', handleReset);
});