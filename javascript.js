let mainContainer = document.querySelector("#mainContainer");

function populateGrid() {
    for (let i = 0; i < 16; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.className = "gridSquare";
        mainContainer.appendChild(gridSquare);
    }
}

populateGrid();