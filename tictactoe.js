console.log("Play game");

let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector(".winner");
let newgamebtn = document.querySelector(".newgame");
let game = document.querySelector(".game");
let resetbtn = document.querySelector(".reset");
let emptyBox = document.querySelectorAll(".empty");
let player0 = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () => {
    player0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    game.classList.remove("hide");
    
};


boxes.forEach(box => {
    box.addEventListener("click", () => {
        {
         
            if (player0) {
                box.innerText = "X";
                player0 = false;
            }
            else {
                box.innerText ="O";
                player0 = true;
                
            }
            box.disabled = true;
        }

        checkwinner();
    })
});
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner =(winner)=>{
    msg.innerText =`Congratulations, Winner is ${winner}.`
    game.classList.add("hide");
    msgContainer.classList.remove("hide");
    disableBoxes();    
};

const checkwinner = () => {
    for(let pattern of winpatterns){
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;
       if(pos1 != "" && pos2 !="" && pos3!=""){
        if(pos1 === pos2 && pos2 === pos3){
        
            showWinner(pos1);
            
        }
       }
    }
};

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);



