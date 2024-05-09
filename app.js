let rules = document.querySelector("#rules");

let rulesImg = document.createElement("img");
rulesImg.setAttribute("class","image");
rulesImg.setAttribute("src",'images/rock-paper-scissors-game-rules.png');
rulesImg.setAttribute("alt","Rules of Game");

let breakEle = document.createElement("br");


//logic to display rules of game
rules.addEventListener("click",()=>{
    let img = document.querySelector(".image");
    if (img){
        rules.innerText = "Rules!";
        document.querySelector(".rules").removeChild(rulesImg);
    }
    else{
        rules.before(rulesImg);
        rules.before(breakEle);
        rules.innerText = "Hide Rules!";
    }
});

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

const choices = ["rock","paper","scissors"]

let user_score = document.querySelector("#user");
let computer_score = document.querySelector("#computer");
let msg = document.querySelector("#msg");


rock.addEventListener("click",()=>{
    console.log("rock is clicked");
    const randomChoice = choices[(Math.floor(Math.random() * choices.length))];  
    const wins = checkwinner("rock",randomChoice);
    console.log(wins,randomChoice);
    if (wins === "draw"){
        msg.innerText = `Computer chose ${randomChoice} and this game is a DRAW`;
    }
    else{
        msg.innerText = `Computer chose ${randomChoice} and this game is won by ${wins}`;
    }

});

paper.addEventListener("click",()=>{
    console.log("paper is clicked");
    const randomChoice = choices[(Math.floor(Math.random() * choices.length))];  
    const wins = checkwinner("paper",randomChoice);
    console.log(wins,randomChoice);
    if (wins === "draw"){
        msg.innerText = `Computer chose ${randomChoice} and this game is a DRAW`;
    }
    else{
        msg.innerText = `Computer chose ${randomChoice} and this game is won by ${wins}`;
    }
});

scissors.addEventListener("click",()=>{
    console.log("scissors is clicked");
    const randomChoice = choices[(Math.floor(Math.random() * choices.length))];  
    const wins = checkwinner("scissors",randomChoice);
    console.log(wins,randomChoice);
    if (wins === "draw"){
        msg.innerText = `Computer chose ${randomChoice} and this game is a DRAW`;
    }
    else{
        msg.innerText = `Computer chose ${randomChoice} and this game is won by ${wins}`;
    }
});

const checkwinner = (user,computer) => {
    if (user==="rock" && computer==="scissors"){
        user_score.innerText = parseInt(user_score.innerText) + 1;
        return "user"; //user wins if 1 is returned
    }
    else if (user==="rock" && computer==="rock"){
        return "draw"; //it is a draw
    }
    else if (user==="rock" && computer==="paper"){
        computer_score.innerText = parseInt(computer_score.innerText) + 1;
        return "computer"; // computer wins
    }
    else if (user==="paper" && computer==="scissors"){
        computer_score.innerText = parseInt(computer_score.innerText) + 1;
        return "computer"; 
    }
    else if (user==="paper" && computer==="paper"){
        return "draw"; // draw
    }
    else if (user==="paper" && computer==="rock"){
        user_score.innerText = parseInt(user_score.innerText) + 1;
        return "user";
    }
    else if (user==="scissors" && computer==="scissors"){
        return "draw";
    }
    else if (user==="scissors" && computer==="paper"){
        user_score.innerText = parseInt(user_score.innerText) + 1;
        return "user";
    }
    else if (user==="scissors" && computer==="rock"){
        computer_score.innerText = parseInt(computer_score.innerText) + 1;
        return "computer"
    }
};

// reset game logic
let reset = document.querySelector("#reset");

reset.addEventListener("click",()=>{
    user_score.innerText = 0;
    computer_score.innerText = 0;
    msg.innerText = "Play your Move!"
})