
//Global variable
let timerEl = document.getElementById("timer");
let startbuttonEl = document.getElementById("startbutton")

//Timer starts upon start button and stops at 0
let countDown = 45
timerEl.textContent = countDown;
function setTimer() {
    if(countDown < 45){
        return;
    }
    let timer = setInterval(function() {
        countDown = countDown - 1
        timerEl.textContent = countDown;
    }, 1000);
    if(countDown === 0){
        clearInterval(timer);
    };
}
//start button
startbuttonEl.addEventListener("click", setTimer);