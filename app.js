
//accessing elements(buttons)
let boxs =document.querySelectorAll(".box");
let resetbtn =document.querySelector("#reset_btn");
let newgamebtn=document.querySelector("#new_btn");
let msg=document.querySelector(".msg");
let msg2=document.querySelector("#msg2");

//player x, player o
let playerO = true;


//2darray
let winptrns =[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];



boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("box clicked");

        if(playerO===true){
            box.innerText="O";
            playerO = false;
        }
        else{
            box.innerText="X"
            playerO=true;
        }

        box.disabled = true;

        checkWinner();
    });

});

const disableboxs=()=>{
    for (const box of boxs) {
        box.disabled=true;
    }
};

const enableboxs=()=>{
    for (const box of boxs) {
        box.enabled=false;
        box.innerText="";
    }
};


const showWinner=(Winner)=>{
 msg.innerText=`Winner is ${Winner}`;
 msg.classList.remove("hide");
 disableboxs();
}


const checkWinner=()=>{
    for (const pattern of winptrns) {
        //console.log(pattern);
        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;


        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2===pos3){
                console.log("Winner",pos1);

                showWinner(pos1);
            }
        }
    }
};


const resetGame=()=>{
    playerO=true;
    enableboxs();
    msg.classList.add("hide");

}

new_btn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);




    