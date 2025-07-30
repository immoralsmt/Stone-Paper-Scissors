let userscore = 0;
let compscore = 0;

const clicks = document.querySelectorAll(".click");
const msg = document.querySelector("#message");
const msgBox = document.querySelector(".msg-box");
const userpara = document.querySelector("#user-score");
const comppara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const option = ["stone", "paper", "scissors"]; // fixed: use "scissors"
    const randnum = Math.floor(Math.random() * 3);
    return option[randnum];
}

const showwinner = (userwin, clickid, compchoice) => {
    if (userwin) {
        console.log("You Win");
        userscore++;
        userpara.innerText = userscore;
        msg.innerText = `Your choice is ${clickid} and computer choice is ${compchoice}`;
        
    }
    else {
        console.log("You Lose");
        compscore++;
        comppara.innerText = compscore;
        msg.innerText = `Your choice is ${clickid} and computer choice is ${compchoice}`;
        
    }
}

const draw = () => {
    console.log("It's a Tie");
    msg.innerText = "It's a Tie";
    
}

const playgame = (clickid) => {
    console.log("Your option is Selected", clickid);
    const compchoice = gencompchoice();
    console.log("Computer option is Selected", compchoice);

    if (clickid === compchoice) {
        draw();
    }
    else {
        let userwin = true;
        if (clickid === "stone") {
            userwin = compchoice === "paper" ? false : true;
        }
        else if (clickid === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        }
        else if (clickid === "scissors") {
            userwin = compchoice === "stone" ? false : true;
        }
        showwinner(userwin, clickid, compchoice);
    }
}

clicks.forEach((click) => {
    click.addEventListener("click", () => {
        const img = click.querySelector("img");
        const clickid = img.getAttribute("id");
        playgame(clickid);
    });
});
