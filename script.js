
let startmin = 10;
let time = startmin * 60;

let min = document.querySelector("#min")
let sec = document.querySelector("#sec")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset")
let Interval;

function setTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    if(time < 1){
        time = startmin * 60;
        clearInterval(Interval);
    }

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    min.innerHTML = `${minutes}`
    sec.innerHTML = `${seconds}`
    time--;
}


start.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(setTimer, 1000);
};

stop.onclick = () => {
    clearInterval(Interval);
};

reset.onclick = () => {
    time = startmin * 60;
    min.innerHTML = `${10}`;
    sec.innerHTML = `${"0" + 0}`;
}
      




































