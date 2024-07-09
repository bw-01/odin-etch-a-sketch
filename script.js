let gridSize = 16;
const CANVAS_SIZE = 960;

const container = document.querySelector(".container");

for (i = 0; i < gridSize * gridSize; i++) {
  squareSize = CANVAS_SIZE / gridSize;
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("gridDiv");
  gridDiv.style.width = `${squareSize}px`;
  gridDiv.style.height = `${squareSize}px`;
  container.appendChild(gridDiv);
}