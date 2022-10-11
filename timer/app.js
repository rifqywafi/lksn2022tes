const time = document.querySelector('.timer');
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');

let seconds = 0;
let interval = null;

startbtn.addEventListener('click', start);
stopbtn.addEventListener('click', stop);
resetbtn.addEventListener('click', reset);

function timer() {
    seconds++;

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;

    if (secs < 10) {secs = '0' + secs};
    if (minutes < 10) {minutes = '0' + minutes};
    if (hours < 10) {hours = '0' + hours};

    time.innerText = `${hours}:${minutes}:${secs}`
}

function start(){
    if (interval){
        return
    }
    interval = setInterval(timer, 1000);
}

function stop(){
    clearInterval(interval);
    interval = null
}

function reset(){
    stop();
    seconds = 0;
    time.innerText = '00:00:00';
}