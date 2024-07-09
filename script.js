let gridDimensions = 16;
const CANVAS_SIZE = 960;
let useColours = false;

const container = document.querySelector(".container");
const dimensions = document.querySelector(".dimensionsButton");
const randomise = document.querySelector(".colourButton");
const clear = document.querySelector(".clearButton");

createGrid();

container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("square")) {
    if (!useColours) {
      event.target.style.background = "black";
    } else {
      event.target.style.background = `rgb(${Math.floor(Math.random() * 256)}, 
      ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
  }
});

dimensions.addEventListener("click", (event) => {
  do {
    gridDimensions = prompt("Enter grid dimensions [between 2 and 100]");
  } while (gridDimensions < 2 || gridDimensions > 100);

  dimensions.textContent = "Width/Height: " + gridDimensions;
  createGrid();
});

randomise.addEventListener("click", (event) => {
  useColours = !useColours;
  randomise.textContent = useColours ? "Back to black" : "Randomise colours";
});

clear.addEventListener("click", () => {
  createGrid();
});

function createGrid() {
  container.innerHTML = ""; //clear the grid

  for (i = 0; i < gridDimensions * gridDimensions; i++) {
    squareSize = CANVAS_SIZE / gridDimensions;
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.style.width = `${squareSize}px`;
    squareDiv.style.height = `${squareSize}px`;
    container.appendChild(squareDiv);
  }
}
