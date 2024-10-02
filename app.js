let uscore = document.getElementById('user-score');
let cscore = document.getElementById('computer-score');
let userscr = document.querySelector('#user');
let computerscr = document.querySelector('#computer');
let winning = document.querySelector('#winning');

let possible = ['rock', 'paper', 'scissor'];
function playMove(){
    let move = Math.floor(Math.random() * possible.length);
    return possible[move];
}
rock.addEventListener('click', (event) => {
    let user = 'rock';
    let comp = playMove();

    if(user === comp){
        winning.textContent = 'Tie';
    }else if((user === 'paper' && comp === 'rock') || (user === 'rock' && comp === 'scissor') || (user === 'scissor' && comp === 'paper')){
        userscr.innerHTML++;
        winning.innerHTML = 'You Wins!';
    }else{
        computerscr.innerHTML++;
        winning.innerHTML = 'Computer Wins!';
    }
    
})
paper.addEventListener('click', (event) => {
    let user = 'paper';
    let comp = playMove();

    if(user === comp){
        winning.textContent = 'Tie';
    }else if((user === 'paper' && comp === 'rock') || (user === 'rock' && comp === 'scissor') || (user === 'scissor' && comp === 'paper')){
        userscr.innerHTML++;
        winning.innerHTML = 'You Wins!';
    }else{
        computerscr.innerHTML++;
        winning.innerHTML = 'Computer Wins!';
    }
})
scissor.addEventListener('click', (event) => {
    let user = 'scissor';
    let comp = playMove();

    if(user === comp){
        winning.textContent = 'Tie';
    }else if((user === 'paper' && comp === 'rock') || (user === 'rock' && comp === 'scissor') || (user === 'scissor' && comp === 'paper')){
        userscr.innerHTML++;
        winning.innerHTML = 'You Wins!';
    }else{
        computerscr.innerHTML++;
        winning.innerHTML = 'Computer Wins!';
    }
})