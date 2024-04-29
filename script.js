const rows = 16;
const columns = 16;
const gridContainer = document.querySelector('#my-grid');


for (let i = 0; i < rows; i++) {
    const gridColumn = document.createElement('div');
    gridColumn.className = 'column';

    for (let j = 0; j < columns; j++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        //gridItem.textContent = `Cell ${i + 1}-${j + 1}`;
        gridColumn.appendChild(gridItem);
    }
    gridContainer.appendChild(gridColumn)
}
const squares = document.querySelectorAll(".grid-item")
squares.forEach(square =>{
    square.addEventListener("mouseover", () => {
        square.classList.replace("grid-item", "selected-grid-item")
        console.log("success")
})

})