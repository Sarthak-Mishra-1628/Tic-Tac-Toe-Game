let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let h=document.querySelector(".winner");
let newBtn=document.querySelector("#new-btn");


let turn_X=true;
const win=[
    [0,1,2], [0,3,6], [0,4,8], [1,4,7],
    [2,5,8], [2,4,6], [3,4,5], [6,7,8] 
];

let a=0;

let winner = (a) => {
    msg.innerText="Winner is "+a;
    h.classList.remove("hide");
}

let disable_boxes = () =>{
    for(x of boxes) x.disabled=true;
}

let enable_boxes =() =>{
    for(x of boxes){
        x.disabled=false;
        x.innerText="-";
        x.style.color='black';
    }
}


let reset_game = () =>{
    enable_boxes();
    h.classList.add("hide");
    turn_X=true;
    a=0;
}


let check = () => {
    for(let i=0;i<win.length;i++){
        if(boxes[win[i][0]].innerText=='X' && boxes[win[i][1]].innerText=='X' && boxes[win[i][2]].innerText=='X'){
            winner('X');
            disable_boxes();
            return;
        }
        
        else if(boxes[win[i][0]].innerText=='O' && boxes[win[i][1]].innerText=='O' && boxes[win[i][2]].innerText=='O'){
            winner('O');
            disable_boxes();
            return;
        }
        else if(a==9){
            msg.innerText="Match Draw !!!";
            h.classList.remove("hide");
        }
        
    }
}


boxes.forEach((x) => {
    x.addEventListener("click", () => {
        a++;
        if(turn_X==true){
            x.innerText='X';
            x.style.color='purple'
            turn_X=false;
        }
        else{
            x.innerText='O';
            x.style.color='orange';
            turn_X=true;
        }
        x.disabled=true;
        check();
    });
});


reset.addEventListener("click", reset_game);
newBtn.addEventListener("click", reset_game);