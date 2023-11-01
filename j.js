const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const restbtn = document.querySelector('#rest');

const scr1 = document.querySelector('#disp1');
const scr2 = document.querySelector('#disp2');

const winscr= document.querySelector('#winscr');

let p1scr = 0;
let p2scr = 0;

let gameOver = false;

let winning = 0;

winscr.addEventListener("change", function(){
    winning = parseInt(this.value);

})

restbtn.addEventListener("click", function(){
    rest();  

})

player1.addEventListener('click', function(e) {
    if (!gameOver){
        if (p1scr === winning){

            scr1.classList.add('win');
            scr2.classList.add('lost');
            gameOver = true;

        }
    p1scr++;
    scr1.textContent = p1scr;
    }
});



player2.addEventListener('click', function(e) {
    if (!gameOver){
        if (p2scr === winning){

            scr2.classList.add('win');
            scr1.classList.add('lost');

            gameOver = true;

        }
    p2scr++;
    scr2.textContent = p2scr;
    }
});

function rest(){
    gameOver = false;
    p1scr = 0;
    p2scr = 0;
    scr1.textContent = 0;
    scr2.textContent = 0;
    scr1.classList.remove('win','lost');
    scr2.classList.remove('win','lost');
}