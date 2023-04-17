let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector(".result p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");


function getComputerChoice(){
    const choice = ['r' , 'p', 's'];
    let randomNumber = Math.floor(Math.random ()*choice.length);
    return choice [randomNumber];
}
function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "You win";
}

function lose(){
   computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "You lose";
}

function draw(){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `It's a draw`;
}


function game(userChoice){
 let  computerChoice = getComputerChoice();
 switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}




rock.addEventListener('click', ()=>{
    game('r');
});
paper.addEventListener('click', ()=>{
    game('p');
});
scissors.addEventListener('click', ()=>{
    game('s');
});

