var i = 0;
var userInput = 16;
const element = document.getElementById("myBtn");

element.addEventListener("click", getSize);

function getSize() {
    userInput = prompt("Input the size of the grid: ");
    // const boxes = document.querySelectorAll(".box");
    // boxes.forEach(box => {
    //     box.remove();
    // });

    while (i < (userInput * userInput)) {
        let div = document.createElement("div");
        div.style.width = "";
        div.style.height = "";
        // div.style.background = "white";
        // div.id = "box"; //maybe id is the problem | change to class without destroying the code 

        // document.getElementById("grid-container").appendChild(div);
        // console.log(i);
        div.classList.add("box");
        document.getElementById("grid-container").appendChild(div);
        i++;

        createGridSize();
        // activatePainting();
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
            // document.getElementById("box").style.backgroundColor = "black";
        });
        div.addEventListener('click', () => {
            div.style.backgroundColor = 'white';
            document.getElementById("box").style.backgroundColor = "white";
        });


    }

}

function createGridSize() {
    let boxSize = 960 / userInput;
    // console.log(boxSize);
    document.getElementById("grid-container").style.gridTemplateColumns = `repeat(${userInput}, ${boxSize}px)`;
    document.getElementById("grid-container").style.gridTemplateRows = `repeat(${userInput}, ${boxSize})`;
    document.getElementById("grid-container").style.width = "960px";
    document.getElementById("grid-container").style.height = "960px";

}

// function activatePainting() {
//     var boxes = document.getElementsByClassName("box");
//     boxes.addEventListener('mouseover', () => {
//         boxes.style.backgroundColor = 'black';
//         // document.getElementById("box").style.backgroundColor = "black";
//     });
//     boxes.addEventListener('click', () => {
//         boxes.style.backgroundColor = 'white';
//         document.getElementById("box").style.backgroundColor = "white";
//     });
// }

/*
box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'red';
});



function changeColor() {



*/