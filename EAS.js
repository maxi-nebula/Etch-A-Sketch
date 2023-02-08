/** @format */

const container = document.getElementById("container");
console.log(container);
function gridCreator(rows, columns) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", columns);
  for (c = 0; c < rows * columns; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}
gridCreator(16, 16);
