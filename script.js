let gridDimensions = 16;
const CANVAS_SIZE = 960;

const container = document.querySelector(".container");
const dimensions = document.querySelector(".dimensionsButton");

createGrid();

container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("square")) {
    event.target.style.background = "black";
  }
});

dimensions.addEventListener("click", (event) => {
  do {
    gridDimensions = prompt("Enter grid dimensions [between 2 and 100]");
  } while (gridDimensions < 2 || gridDimensions > 100);

  createGrid();
});

function createGrid() {
  container.innerHTML = ''; //clear the grid

  for (i = 0; i < gridDimensions * gridDimensions; i++) {
    squareSize = CANVAS_SIZE / gridDimensions;
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.style.width = `${squareSize}px`;
    squareDiv.style.height = `${squareSize}px`;
    container.appendChild(squareDiv);
  }
}
