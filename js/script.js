// VARIABLES
let chrono = 0;
let timerId = null;

let startBtn;
let resetBtn;
let chronoDom;


// FUNCTIONS
function handleStart() {
    if (timerId === null || chrono === 0) {  
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
       startBtn.disabled = false;
       resetBtn.disabled = true;
      clearInterval(timerId);
       chrono = 0;
       chronoDom.innerText = chrono;
}
}

function animationStart(){
    document.querySelector('.black-hole').classList.add('animSlide');
    document.querySelector('.container').classList.add('animAttract');
    setTimeout(() => {
        document.getElementById('startBtn').classList.add('animFade');
        document.getElementById('counter').classList.add('animFade');
    }, 5000);

}

function animationStop() {
    document.querySelector('.black-hole').classList.remove('animSlide');
    document.querySelector('.container').classList.remove('animAttract');
    document.getElementById('startBtn').classList.remove('animFade');
    document.getElementById('counter').classList.remove('animFade');
    chrono = 0;
}




// CODE PRINCIPAL
document.addEventListener('DOMContentLoaded', function() {
    //console.log('DOM Loaded !');

    startBtn = document.getElementById('startBtn');
    resetBtn = document.getElementById('resetBtn');
    chronoDom = document.getElementById('counter');

    startBtn.addEventListener('click', handleStart);
    resetBtn.addEventListener('click', handleReset);
    
    startBtn.addEventListener('click', animationStart);
    resetBtn.addEventListener('click', animationStop);
});


