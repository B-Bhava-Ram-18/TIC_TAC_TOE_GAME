let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#reset");
let newbtn=document.querySelector(".new");
let unhidewin=document.querySelector(".msg");
let winmsg=document.querySelector("#winmsg");
let count=0;
const winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
let turn=true;
let winnerfound=false;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        count=count+1;
        if(turn){
            box.innerText='X';
            turn=false;
        }
        else {box.innerText='O';turn=true;}
        box.disabled=true;
        checkwinner();
        if(count===9&&!winnerfound){draw();}
    })
})
const draw=()=>{
    winmsg.innerText='Game Draw!';
    unhidewin.classList.remove("hide");
    disboxes();
}
const resetgame=()=>{
    turn=true;
    winnerfound=false;
    count=0;
    enableboxes();
    unhidewin.classList.add("hide");
}
let enableboxes=()=>{
    for(let box of boxes){box.disabled=false;box.innerText='';}
}
let disboxes=()=>{
    for(let box of boxes)box.disabled=true;
}
const showwinner=(winner)=>{
    winnerfound=true;
    winmsg.innerText=`winner is ${winner}`;
    unhidewin.classList.remove("hide");
    disboxes();
}
const checkwinner=()=>{
    for (let pattern of winpatterns){
        let first=boxes[pattern[0]].innerText;
        let second=boxes[pattern[1]].innerText
        let third=boxes[pattern[2]].innerText
        if(first!==''&&second!==''&&third!=''){
            if(first===second&&second===third) {showwinner(first);return;}
        }
    }
}
newbtn.addEventListener("click",resetgame);
rstbtn.addEventListener("click",resetgame);
