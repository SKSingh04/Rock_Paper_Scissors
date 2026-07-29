let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreMsg = document.querySelector("#user-score");
const compScoreMsg = document.querySelector("#comp-score");

const playGame = (userChoice) =>{
    const compChoice = getCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
            if(userChoice==="rock"){
                userWin = compChoice==="paper"? false : true;
            }
            else if(userChoice==="paper"){
                userWin = compChoice==="scissors"? false : true;
            }
            else if(userChoice==="scissors"){
                userWin = compChoice==="rock"? false: true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});

const getCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = ()=>{
        msg.textContent = "Game Draw";
        msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        msg.textContent = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#37a137";
        userScoreMsg.textContent=userScore;
    }
    else{
        compScore++;
        msg.textContent =  `You Lose, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#9c1919";
        compScoreMsg.textContent=compScore;
    }
}