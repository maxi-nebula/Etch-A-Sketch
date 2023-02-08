/** @format */

const container = document.getElementById("container");

function gridCreator(rows, columns) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", columns);
  for (c = 0; c < rows * columns; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }

  const hoveredGrid = document.querySelectorAll(".grid-item");
  console.log(hoveredGrid);
  hoveredGrid.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.classList.add("on_mouse_enter");
    });
  });
}
gridCreator(16, 16);
