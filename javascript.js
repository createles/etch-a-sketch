let mainContainer = document.querySelector("#mainContainer");

function populateGrid(size) {
    for (let i = 0; i < size; i++) {
        let gridRowContainer = document.createElement("div");
        gridRowContainer.className = "gridRowContainer";
        mainContainer.appendChild(gridRowContainer);
        for (let j = 0; j < size; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.className = "gridSquare";
            gridSquare.addEventListener("mouseover", () => gridSquare.style.backgroundColor = "blue");
            gridRowContainer.appendChild(gridSquare);
        }
    }
}



function resize(newSize) {
    mainContainer.innerHTML = "";
    populateGrid(newSize);
}

let resizeButton = document.querySelector("#gridSize");
resizeButton.addEventListener("click", () => {
    let size;   
    do {
        size = prompt("Please input your desired canvas pixel-size (maximum of 100).");
        size = Number(size);

        if (size > 100) {
            alert("Cannot generate more than 100 grid tiles per side. Please enter a number less than 100.");
        } else if (size < 2 || !Number.isInteger(Number(size))) {
            alert("Must input a whole number from 2 to 100.");
        }   

    } while (!(size <= 100 && size >= 2 && Number.isInteger(Number(size))))

    resize(size);
}); 

populateGrid(16);
