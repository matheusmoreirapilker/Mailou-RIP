const dog = document.querySelector('.dog')
const pipe = document.querySelector('.pipe')
const res = document.querySelector('.res')
const clouds = document.querySelector('.clouds')
const btn = document.querySelector('.btn')
const timer = document.querySelector('.counter')
let timerTime = 0;
let timerInterval;

function reload (){
    location.reload()
}



function jump(){
    dog.classList.add('jump')
    

    setTimeout(() => {
        dog.classList.remove('jump')
    }, 500);

}

const loop = setInterval(() => {
    const cloudsPosition = clouds.offsetLeft;
    const pipePosition = pipe.offsetLeft;
    const dogPosition = +window.getComputedStyle(dog).bottom.replace('px', '')


    if(pipePosition <= 150 && pipePosition > 0 &&dogPosition <=10){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
        

        dog.style.animation = 'none'
        dog.style.bottom = `${dogPosition}px`

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(loop)
        clearInterval(timerInterval);
        res.innerHTML = '<h1>Game Over</h1>'

    }

}, 10);

timerInterval = setInterval(() => {
    timerTime++;
    timer.innerHTML = timerTime;
}, 1000);


document.addEventListener('keydown', jump)

btn.addEventListener('click', reload)