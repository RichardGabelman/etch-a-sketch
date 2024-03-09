function deleteGrid() {
  const container = document.querySelector(".container");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function newGrid(size) {
  deleteGrid();
  const container = document.querySelector(".container");
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.toggle("row");
    for (let n = 0; n < size; n++) {
      const square = document.createElement("div");
      square.classList.toggle("square");
      row.appendChild(square);
    }
    container.appendChild(row);
  }
  const squares = document.querySelectorAll('.square');
  squares.forEach(item => {
  item.addEventListener('mouseenter', e => {
    const target = e.target;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  })
})
}

newGrid(4);

const btn = document.querySelector(".button");
btn.addEventListener('click', e => {
  let gridSize = prompt("Please enter a grid size: X * X (max 100)");
  while (gridSize > 100) {
    gridSize = prompt("Please enter a grid size: X * X (max 100)");
  }
  newGrid(gridSize);
});

