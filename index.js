const cellElements=document.querySelectorAll(".Game_board .cell");
const player1=document.querySelector(".playerone");
const player2=document.querySelector(".playertwo");
const result=document.querySelector(".result");
const result_text=document.querySelector("h1");
const restart_btn=document.querySelector("button");


const winning_condition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const playerO="O";
const playerX="X";

let toggleturn=true;
cellElements.forEach(cell=>{
cell.onclick=()=>{
   let currentplayer= toggleturn?playerO:playerX;
    cell.classList.add("disable");
   addInCelL(cell,currentplayer);//Funcation calling...............
  if( winnerCheck(currentplayer)){
    console.log( currentplayer,"winnter");
    result.classList.remove("inaction");
    addinactive();
    result_text.innerText=currentplayer+"  Win the Game.";
    
  }//funcation calling.....
  else if(isdraw()){
    console.log("Draw the Game!");
    addinactive();
    result_text.innerText="  Draw the Game.";
  } else{
    swapPlayer();//funcation calling................

  }

}
})

// --------------------------------------------------Check_winer-Funcation--------------------------
winnerCheck=(currentplayer)=>{
    return winning_condition.some(condition=>{
       // console.log(condition);
       return condition.every(index=>{
       // console.log(index);
      //  console.log(cellElements[index].classList.contains(currentplayer));
       return cellElements[index].classList.contains(currentplayer);
        });
    });
}

// --------------------------------------------to Draw_the game funcation-------------------
 function isdraw(){
   return [...cellElements].every(cell=>{
        return cell.classList.contains(playerX)||cell.classList.contains(playerO);
    });
}
// ...........................................swapPlayer_Funcation----------------------------------------
swapPlayer=()=>{
    toggleturn=!toggleturn; 
    if(toggleturn){
        player1.classList.add("active");
        player2.classList.remove("active");
    } 
    else{
        player2.classList.add("active");
        player1.classList.remove("active");
    }
}

// ---------------------------------------------------addInCelL------------------------------------------
addInCelL=( cell,currentplayer)=>{
    cell.innerHTML=currentplayer;
    cell.classList.add(currentplayer);
}

// ----------------------------------addinaction_funcation--------------------------------------------
addinactive=()=>{
    result.classList.remove("inaction");

}
restart_btn.onclick=()=>{
location.reload();
}

// ---------------------------------Changing_mode-of_body_-------------------------------------------
const body=document.querySelector("body");
const modechanging_icon=document.querySelector("i");
let currentmode="light";
modechanging_icon.addEventListener("click",()=>{
if(currentmode==="light"){
    currentmode="dark";
    body.classList.add("dark");
    body.classList.remove("light");
}
else{
     currentmode="light";
    body.classList.add("light");
    body.classList.remove("dark");
}
});


