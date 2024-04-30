//set the initial grid

const gridContainer = document.querySelector('.grid');




//testing reset button
//prompts user for new grid number
//removes previous grid and adds new one
const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", () => {
    let newRows = prompt("number?")
    const element = document.querySelector(".grid")
    element.remove()  
    let newGridDiv = document.querySelector("#main");
    newGridDiv.insertAdjacentHTML("beforeend", `<div class="grid"></div>`)
    newGrid(newRows)
    trackSquares()
})

function newGrid(rows) {
    const revisedGrid = document.querySelector(".grid")
//loops to create the initial column
    for (let i = 0; i < rows; i++) {
    const gridColumn = document.createElement('div');
    gridColumn.className = 'column';
//creates the next row
    for (let j = 0; j < rows; j++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        //gridItem.textContent = `Cell ${i + 1}-${j + 1}`;
        gridColumn.appendChild(gridItem);
    }
    //adds the grid onto the grid container
    revisedGrid.appendChild(gridColumn)
}}



//takes a number and creates a square grid
function initialGrid() {
    const rows = 3;
//loops to create the initial column
    for (let i = 0; i < rows; i++) {
    const gridColumn = document.createElement('div');
    gridColumn.className = 'column';
//creates the next row
    for (let j = 0; j < rows; j++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        //gridItem.textContent = `Cell ${i + 1}-${j + 1}`;
        gridColumn.appendChild(gridItem);
    }
    //adds the grid onto the grid container
    gridContainer.appendChild(gridColumn)
}}

//hover mouse adds blue background to box
function trackSquares() {
const squares = document.querySelectorAll(".grid-item")
squares.forEach(square =>{
    square.addEventListener("mouseover", () => {
        square.classList.replace("grid-item", "selected-grid-item")
})
})}

initialGrid()
trackSquares()