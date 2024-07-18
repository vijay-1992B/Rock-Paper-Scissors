let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];

}

const drawGame=()=>{
    msg.innerText="Game was Draw. Play Again"
    msg.style.background="#081b31"
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background="green"
        userScore++;
        userScorePara.innerText=userScore;
        
    } else{
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`
        msg.style.background="red"
        compScore++;
        compScorePara.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        drawGame()
    } else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper scissors
           userWin= compChoice==="paper"?false:true;
        } else if(userChoice==="paper"){
            // rock scissors
            userWin=compChoice==="scissors"?false:true;
        }else{
            //rock paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});