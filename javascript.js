let mainContainer = document.querySelector("#mainContainer");
let size = 16;

function populateGrid(size) {
    for (let i = 0; i < size; i++) {
        let gridRowContainer = document.createElement("div");
        gridRowContainer.className = "gridRowContainer";
        mainContainer.appendChild(gridRowContainer);
        for (let j = 0; j < size; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.className = "gridSquare";
            gridSquare.addEventListener("mouseover", () => gridSquare.style.backgroundColor = `rgb(0,0,0`);
            /* !CODE TO ADD OPACITY CHANGES!
             gridSquare.addEventListener("mouseover", () => {
                let currentOpacity = Number(gridSquare.style.opacity);
                gridSquare.style.opacity = Math.min(currentOpacity + 0.1, 1);
            }); */
            gridRowContainer.appendChild(gridSquare);
        }
    }
}


let multicolor = document.querySelector("#multicolor");
multicolor.addEventListener("click", () => {
    resize(size);
    document.querySelectorAll(".gridSquare").forEach(element => {
        element.addEventListener("mouseover", () => element.style.backgroundColor = `rgb(${randomizeRGB()},${randomizeRGB()},${randomizeRGB()})`)
    });
})

let monotone = document.querySelector("#monotone");
monotone.addEventListener("click", () => {
    resize(size);
    document.querySelectorAll(".gridSquare").forEach(element => {
        element.addEventListener("mouseover", () => element.style.backgroundColor = `rgb(0,0,0`)
    });
})


function resize(newSize) {
    mainContainer.innerHTML = "";
    populateGrid(newSize);
}

function randomizeRGB() {
    let num = Math.floor(Math.random()*256);
    return num;
}

let resizeButton = document.querySelector("#gridSize");
resizeButton.addEventListener("click", () => {  
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
