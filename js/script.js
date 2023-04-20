const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const score = document.querySelector('.score');
const play = document.querySelector('.play');
const gameOver = document.querySelector('.game-over');

let count = 0;

const jump =() => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition =clouds.offsetLeft;
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.marginLeft = `${cloudsPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width ='75px'
        mario.style.marginLeft ='50px'

        play.style.display="initial"
        gameOver.style.display="initial"

        clearInterval(loop);
    } 

    count++;
    score.innerHTML= `SCORE: ${count}`;
   
    
},10);
document.addEventListener('keydown', (e) => {

    if((e.code === "ArrowUp") | (e.code === "Space")){
        jump();
    }

});