let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetButton");
console.log(boxes[0].innerHTML);
let turn0=true; //playerX , player0
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let win=0;
let disBtnCount=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerHTML="0";
            turn0=false;
        }else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled=true;
        disBtnCount++;
        console.log("disBtnCount",disBtnCount);
        win=checkWinner();
        console.log("win",win);
        if(disBtnCount===9 && win!=1){
            showDraw();
        }
    });
});

function checkWinner(){
    for(pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        if(boxes[pattern[0]].innerText!="" && boxes[pattern[1]].innerText != "" && boxes[pattern[2]].innerText!=""){

            if(boxes[pattern[0]].innerText===boxes[pattern[1]].innerText &&
                boxes[pattern[1]].innerText===boxes[pattern[2]].innerText ){
                    console.log("WIN1");
                    showWinner(boxes[pattern[0]].innerText);
                    fillGrid();
                    return 1;
            }
        }
    }
    return 0;
}
let popup1=document.querySelector(".popup1");
function showWinner(winner) {
    popup1.innerText=`🎉 Winner is ${winner}! 🎉`;
    popup1.classList.remove("hide");
  }
  let popup2=document.querySelector(".popup2");
  function showDraw() {
    popup2.innerText=`DRAW !`;
    popup2.classList.remove("hide");
  }

document.querySelector("#resetButton").addEventListener("click",()=>{
    location.reload();
})

function fillGrid(){
    boxes.forEach((box)=>{
        if(box.disabled==false) box.disabled=true;
    })
}  