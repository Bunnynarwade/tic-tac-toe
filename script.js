let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset-btn")
let container = document.querySelector(".container")
let afterwin = document.querySelector(".win1");
let turn0 = true;//players turn
const winpattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let disable = (posi1) =>{
    boxes.forEach((box) =>{
        box.disabled = true;
    })
    afterwinfn(posi1)
}

let afterwinfn = (posi1) =>{
    container.classList.add("hide");
    afterwin.classList.remove("win1");
    afterwin.classList.add("win2");
    afterwin.innerText = `WINNER ${posi1}`;
}
boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("box was clicked")
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        winner();
    })
})

let winner = () =>{
    for(let patter of winpattern){
        let posi1 = boxes[patter[0]].innerText;
        let posi2 = boxes[patter[1]].innerText;
        let posi3 = boxes[patter[2]].innerText;
        if(posi1 != "" &&  posi2 != "" && posi3 != ""){
            if(posi1 === posi2 && posi2 === posi3){
                console.log(`winner is ${posi1}`)
                disable(posi1);
            }
        }
    }
}

reset.addEventListener("click" ,()=>{
    location.reload();
})