console.log("Play game");
let player0 = true;
let boxes = document.querySelectorAll(".box");
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
boxes.forEach(box => {
    box.addEventListener("click", () => {
        {
            console.log("box clicked");
            if (player0) {
                box.innerText = "X";
                player0 = false;
                box.disabled = true;
            }
            else {
                box.innerText ="O";
                player0 = true;
                box.disabled = true;
            }
        }

        checkwinner();
    })
});

const checkwinner = () => {
    for(let pattern of winpatterns){
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;
       if(pos1 != "" && pos2 !="" && pos3!=""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("winner",pos1)
            window.alert("winner");
        }
       }
    }
}